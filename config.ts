export default {
    serverHost: "192.168.100.130",
    gameServerPort: 16100,
    regionName: "BH3_PS",
    mongodbUrl: "mongodb://localhost:27017"
} as configInterface

interface configInterface{
    serverHost: string
    gameServerPort: number
    regionName: string
    mongodbUrl: string
}
