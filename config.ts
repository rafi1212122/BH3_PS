export default {
    serverHost: "192.168.1.9",
    gameServerPort: 16100,
    regionName: "BH3_PS01"
} as configInterface

interface configInterface{
    serverHost: string
    gameServerPort: number
    regionName: string
}
