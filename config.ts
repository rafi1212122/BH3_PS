export default {
    serverHost: "192.168.1.5",
    gameServerPort: 16100,
    regionName: "BH3_PS"
} as configInterface

interface configInterface{
    serverHost: string
    gameServerPort: number
    regionName: string
}
