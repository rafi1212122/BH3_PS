import net from "net"
import { BuyGoodsReq, BuyGoodsRsp, BuyGoodsRsp_CmdId, BuyGoodsRsp_Retcode, GetEquipmentDataRsp, GetEquipmentDataRsp_CmdId, GetEquipmentDataRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"
import ShopGoods from '../../resources/ExcelOutputAsset/ShopGoods.json'
import { addItem } from "../../mongodb/Model/Item"
import GameServer from "../GameServer"

export default async (socket: net.Socket, packet: BuyGoodsReq) => {
    const session = GameServer.getInstance().sessions.get(`${socket.remoteAddress}:${socket.remotePort}`)
    const user = session?.user
    if(!user) {
        return Packet.getInstance().serializeAndSend(socket, BuyGoodsRsp_CmdId.CMD_ID, {
            retcode: BuyGoodsRsp_Retcode.FEATURE_CLOSED
        } as BuyGoodsRsp)
    }
    const goods = (ShopGoods as Goods[]).find(good=>good.ID==packet.goodsId)
    if(!goods){
        return Packet.getInstance().serializeAndSend(socket, BuyGoodsRsp_CmdId.CMD_ID, {
            retcode: BuyGoodsRsp_Retcode.GOODS_NOT_EXIST
        } as BuyGoodsRsp)
    }

    const newItem = (await addItem(user.uid, goods.ItemID, goods.ItemNum*packet.goodsNum)).value
    const costItem = (await addItem(user.uid, goods.CostItemId1, -goods.CostItemNum1)).value

    Packet.getInstance().serializeAndSend(socket, GetEquipmentDataRsp_CmdId.CMD_ID, {
        retcode: GetEquipmentDataRsp_Retcode.SUCC,
        vitalityValue: 0,
        materialList: [
            {
                id: newItem?.id,
                num: newItem?.num
            },
            {
                id: costItem?.id,
                num: costItem?.num
            }
        ]
    } as GetEquipmentDataRsp)
    
    Packet.getInstance().serializeAndSend(socket, BuyGoodsRsp_CmdId.CMD_ID, {
        retcode: BuyGoodsRsp_Retcode.SUCC,
        goodsId: goods.ID,
        itemId: goods.ItemID,
        shopId: packet.shopId,
        num: goods.ItemNum*packet.goodsNum,
        goodsBuyTimes: 1,
        giftPackSelectRewardId: packet.giftPackSelectRewardId
    } as BuyGoodsRsp)
}

interface Goods {
  ItemID: number
  ItemLevel: number
  ItemNum: number
  MCoinCost: number
  HCoinCost: number
  CostItemId1: number
  CostItemNum1: number
  CostItemId2: number
  CostItemNum2: number
  CostItemId3: number
  CostItemNum3: number
  CostItemId4: number
  CostItemNum4: number
  CostItemId5: number
  CostItemNum5: number
  MaxBuyTimes: number
  PriceRateID: number
  Discount: number
  IsSuperWorth: number
  IsNew: boolean
  CouponType: number
  RedDot: boolean
  IsBuyMultiple: boolean
  GoodsClassIdList: number[]
  GoodsSortId: number
  IsAutoOpen: number
  BuyMultipleMax: number
  GlobalMaxBuyTimes: number
  ChooseDialogType: number
  DataImpl: {}
  ID: number
}