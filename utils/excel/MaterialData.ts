import ItemExcelTable from "../../resources/ExcelOutputAsset/MaterialData.json";

export default class MaterialData {
    private constructor() { }

    public static fromId(id: number) {
        return (ItemExcelTable as ItemExcelTable).find(e => e.ID === id);
    }

    public static all() {
        return ItemExcelTable as ItemExcelTable;
    }
}

type ItemExcelTable = {
    rarity: number
    maxRarity: number
    cost: number
    maxLv: number
    sellPriceBase_1: number
    sellPriceAdd: number
    ServantExpProvide: number
    gearExpProvideBase: number
    gearExpPorvideAdd: number
    ItemType: string
    useID: number
    BaseType: number
    displayTitle: {
        hash: number
    }
    displayDescription: {
        hash: number
    }
    iconPath: string
    imagePath: string
    characterExpProvide: number
    LinkIDList: any[]
    ShopUseList: any[]
    displayBGDescription: {
        hash: number
    }
    quantityLimit: number
    SortID: number
    AffixTrainType: number
    AffixRandomValueIncress: number
    AffixTitleExp: number
    quickBuyType: number
    shopType: number
    idShopGoods: number
    quickBuyConfirm: boolean
    hideInInventory: boolean
    hideNumInTips: boolean
    SellPriceID_1: number
    costVitality: number
    enableQuickSell: boolean
    advSellBonusNum: number
    TagType: number
    GachaMainDropDisplayConfig: any[]
    GachaGiftDropDisplayConfig: any[]
    alwaysShowPopUp: boolean
    DataImpl: {}
    ID: number
}[]