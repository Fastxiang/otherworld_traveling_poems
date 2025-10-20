ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments } = event;

    event.register(
        Commands.literal('fast')
            .requires(src => src.hasPermission(2))
            .then(Commands.literal('instance')
                .then(Commands.literal('message')
                    .then(Commands.argument('player', Arguments.PLAYER.create(event))
                        .then(Commands.literal('true')
                            .executes(ctx => {
                                let player = ctx.source.server.getPlayer(Arguments.PLAYER.getResult(ctx, 'player'));
                                player.persistentData.DungeonChatLogEnabled = true;
                                return 1;
                            })
                        )
                        .then(Commands.literal('false')
                            .executes(ctx => {
                                let player = ctx.source.server.getPlayer(Arguments.PLAYER.getResult(ctx, 'player'));
                                player.persistentData.DungeonChatLogEnabled = false;
                                return 1;
                            })
                        )
                    )
                )
            )
    );
});
