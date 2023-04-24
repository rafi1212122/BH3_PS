import Database from "../../server/Database";
import ItemExcel from '../../resources/ExcelOutputAsset/Item.json'

const database = Database.getInstance().db;
export default database.collection<ItemScheme>("item");

export const addItem = (uid: number, id: number, num: number) => {
    if(!(ItemExcel as Item[]).map(w=>w.ID).includes(id)) throw "Invalid Item ID"
    return database.collection<ItemScheme>("item").findOneAndUpdate({
        uid,
        id
    },{
        $set: {
            uid,
            id
        },
        $inc: {
            num
        }
    }, { upsert: true, returnDocument: 'after' })
}

export const getItems = async (uid: number) => {
    return await database.collection<ItemScheme>("item").find({
        uid
    }).toArray()
}

export const getItem = (uid: number, id: number) => {
    return database.collection<ItemScheme>("item").findOne({
        uid,
        id
    })
}

export interface ItemScheme {
    id: number
    num: number
    uid: number
}

interface Item {
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
  LinkIDList: number[]
  ShopUseList: string[]
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
  GachaMainDropDisplayConfig: number[]
  GachaGiftDropDisplayConfig: number[]
  alwaysShowPopUp: boolean
  DataImpl: {}
  ID: number
}