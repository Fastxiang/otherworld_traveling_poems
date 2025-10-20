
const $KeyInput = Java.loadClass('net.minecraftforge.client.event.InputEvent$Key')
const $GLFWkey = Java.loadClass("org.lwjgl.glfw.GLFW");

NativeEvents.onEvent($KeyInput, event => {
    let player = Client.player
    if (event.getAction() == $GLFWkey.GLFW_PRESS && event.getKey() == $GLFWkey.GLFW_KEY_S) {
        player.sendData("PressSKey")
    }
})