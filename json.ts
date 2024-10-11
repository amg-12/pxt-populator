namespace json {
    export function send(command: string, text: string) {
        let chunks = []

        for (let i = 0; i < text.length; i += 256) {
            chunks.push(text.slice(i, i + 256))
        }

        player.execute(`scriptevent json_start:${command} ${chunks[0]}`)

        for (let i = 1; i < chunks.length - 1; i++) {
            player.execute(`scriptevent json_middle:${command} ${chunks[i]}`)
        }

        player.execute(`scriptevent json_end:${command} ${chunks.length > 1 ? chunks[chunks.length - 1] : ""}`)
    }
}