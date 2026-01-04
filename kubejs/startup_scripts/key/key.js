   const $KeyMappingRegistry = Java.loadClass("dev.architectury.registry.client.keymappings.KeyMappingRegistry");
   const $KeyMapping = Java.loadClass("net.minecraft.client.KeyMapping");
   const $GLFWkey = Java.loadClass("org.lwjgl.glfw.GLFW");
   
   ClientEvents.init(() => {
   global.regKeyArctive = new $KeyMapping(
           "key.fast.active_skills",
           $GLFWkey.GLFW_KEY_K,
           "key.keybinding.fast.arctive"
       );
   global.regKeyListSwitch = new $KeyMapping(
           "key.fast.active_skills2",
           $GLFWkey.GLFW_KEY_J,
           "key.keybinding.fast.listswitch"
       );
     $KeyMappingRegistry.register(global.regKeyArctive);
     $KeyMappingRegistry.register(global.regKeyListSwitch);
   });