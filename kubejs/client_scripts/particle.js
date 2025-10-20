const $DustParticleOptions = Java.loadClass("net.minecraft.core.particles.DustParticleOptions");
const $ParticleOptions = Java.loadClass("net.minecraft.core.particles.ParticleOptions");
const $StringTag = Java.loadClass("net.minecraft.nbt.StringTag");

NetworkEvents.dataReceived('drawParticle', event => {
  let { level, data } = event
  let particle = data.particle
  let newParticles = []
  let currentParticle
  if (Array.isArray(particle)) {
    particle.forEach(p => {
      let arr = replace(p.toString(), `"`, '').split(' ')
      currentParticle = arr[0] === 'minecraft:dust' ? new $DustParticleOptions(Vec3f(arr[1], arr[2], arr[3]), arr[4]) : p
      if (currentParticle instanceof $StringTag) currentParticle = replace(currentParticle.toString(), `"`, '')
      newParticles.push(currentParticle)
    })
  } else {
    let arr = replace(particle.toString(), `"`, '').split(' ')
    newParticles = arr[0] === 'minecraft:dust' ? new $DustParticleOptions(Vec3f(arr[1], arr[2], arr[3]), arr[4]) : particle
  }
  drawParticle(level, data.points, data.showPoints ? [] : undefined, data.showPoints ? [] : undefined, data.isDelayed, data.tick, newParticles, data.lifeTime)
})


/**
 * 绘制粒子
 * @param {$Level} level
 * @param {Number[][]} points 所有的粒子的位置数组
 * @param {Number[][]} showPoints 如果为undefined则表示不会显示过去的粒子 如果为[]或者有值则表示会渲染过去的粒子
 * @param {Number[][]} showParticles 如果为undefined则表示不会显示过去的粒子 如果为[]或者有值则表示会渲染过去的粒子
 * @param {Boolean} isDelayed 是否延时展示
 * @param {Number} tick 粒子显示的时长 有延时则是要求多少tick内全部展示完毕 有延时但是tick为-1的话则表示以1tick展示1个粒子的速度展示
 * @param {$ParticleOptions | $ParticleOptions[] | String | String[]} particle 粒子效果 默认end_rod 支持多个粒子类型 但是要求如果是多个粒子坐标数和粒子类型数要一致
 * @param {Number} lifeTime 粒子的生命周期,-1则表示按照原本粒子的生命周期,默认为-1
 */
function drawParticle(level, points, showPoints, showParticles, isDelayed, tick, particle, lifeTime) {
  //下一次粒子的延时
  let delayedTick = 1

  if (isDelayed) {
    let res = drawParticleDelayed(level, points, particle, showPoints, showParticles, delayedTick, tick, lifeTime)
    points = res[0]
    particle = res[1]
    showPoints = res[2]
    showParticles = res[3]
    delayedTick = res[4]
  } else {
    //全部展示
    drawParticleNoDelayed(level, points, particle, lifeTime)
  }
  //时间结束 或者 无要展示的粒子 退出
  if (tick === 0 || points.length === 0) return
  //减少tick
  tick -= delayedTick

  Client.scheduleInTicks(delayedTick, () => {
    drawParticle(level, points, showPoints, showParticles, isDelayed, tick, particle, lifeTime)
  })
}

/**
 * 延时渲染粒子
 * @param {$Level} level
 * @param {Number[][]} points
 * @param {Number[][]} particle
 * @param {Number[][]} showPoints
 * @param {Number[][]} showParticles
 * @param {Number} delayedTick
 * @param {Number} tick
 * @param {Number} lifeTime
 * @returns {any[]} [points, particle, showPoints, showParticles, delayedTick]
 */
function drawParticleDelayed(level, points, particle, showPoints, showParticles, delayedTick, tick, lifeTime) {
  if (tick === -1) {
    //正常速度展示
    let point = points[0]
    let currentParticle = Array.isArray(particle) ? particle[0] : particle
    if (lifeTime === -1) {
      level.spawnParticles(currentParticle, false, point[0], point[1], point[2], 0, 0, 0, 0, 0)
    } else {
      let p = Client.particleEngine.createParticle(currentParticle, point[0], point[1], point[2], 0, 0, 0)
      p.lifetime = lifeTime
    }
    points.shift()
    if (Array.isArray(particle)) particle.shift()
  } else {
    let count = points.length / tick
    //延时展示
    if (showPoints !== undefined) {
      //展示过去的粒子
      drawParticleNoDelayed(level, showPoints, showParticles, lifeTime)
    }
    //展示现在的粒子
    if (count >= 1) {
      //值多次数少 一次多打印几个值
      for (let i = 0; i < count; i++) {
        let point = points[0]
        if (point === undefined) return
        let currentParticle = Array.isArray(particle) ? particle[0] : particle
        if (lifeTime === -1) {
          level.spawnParticles(currentParticle, false, point[0], point[1], point[2], 0, 0, 0, 0, 0)
        } else {
          let p = Client.particleEngine.createParticle(currentParticle, point[0], point[1], point[2], 0, 0, 0)
          p.lifetime = lifeTime
        }
        if (showPoints !== undefined) {
          showPoints.push(point)
          showParticles.push(currentParticle)
        }
        points.shift()
        if (Array.isArray(particle)) particle.shift()
      }
    } else {
      //次数少值多 打印后添加空白
      count = Math.floor(tick / points.length)
      let point = points[0]
      let currentParticle = Array.isArray(particle) ? particle[0] : particle
      if (lifeTime === -1) {
        level.spawnParticles(currentParticle, false, point[0], point[1], point[2], 0, 0, 0, 0, 0)
      } else {
        let p = Client.particleEngine.createParticle(currentParticle, point[0], point[1], point[2], 0, 0, 0)
        p.lifetime = lifeTime
      }
      if (showPoints !== undefined) {
        showPoints.push(point)
        showParticles.push(currentParticle)
      }
      for (let i = 0; i < count; i++) {
        delayedTick++
      }
      points.shift()
      if (Array.isArray(particle)) particle.shift()
    }
  }
  return [points, particle, showPoints, showParticles, delayedTick]
}
/**
 * 无延时渲染粒子
 * @param {$Level} level
 * @param {Number[][]} points
 * @param {$ParticleOptions | $ParticleOptions[] | String | String[]} particle
 * @param {Number} lifeTime 粒子的生命周期,-1则表示按照原本粒子的生命周期,默认为-1
 */
function drawParticleNoDelayed(level, points, particle, lifeTime) {
  for (let index = 0; index < points.length; index++) {
    let point = points[index]
    let currentParticle = Array.isArray(particle) ? particle[index] : particle

    if (lifeTime === -1) {
      level.spawnParticles(currentParticle, false, point[0], point[1], point[2], 0, 0, 0, 0, 0)
    } else {
      let p = Client.particleEngine.createParticle(currentParticle, point[0], point[1], point[2], 0, 0, 0)
      p.lifetime = lifeTime
    }
  }
}

/**
 * 替换一个字符串中所有符合要求的字符串
 * @param {String} text
 * @param {String} searchValue
 * @param {String} replaceValue
 * @returns {String}
 */
function replace(text, searchValue, replaceValue) {
  return Array.from(text).reduce((acc, char) => {
    return acc + (char === searchValue ? replaceValue : char);
  }, '');
}