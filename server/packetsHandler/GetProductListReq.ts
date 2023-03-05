import net from "net"
import { GetProductListReq, GetProductListRsp, GetProductListRsp_CmdId, GetProductListRsp_Retcode, Product, ProductType } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetProductListReq) => {
    Packet.getInstance().serializeAndSend(socket, GetProductListRsp_CmdId.CMD_ID, {
        retcode: GetProductListRsp_Retcode.SUCC,
        productList: [
            {
                "name": "asiagifthardcointier5",
                "desc": "330 Crystal Bundle",
                "type": ProductType.PRODUCT_CARD,
                "payHcoin": 330,
                "freeHcoin": 0,
                "price": 499,
                "cardDailyHcoin": 60,
                "cardLeftDays": 0,
                "id": 391,
                "mcoin": 0,
                "priceTier": "Tier_5"
            },
            {
                "name": "asiafirst2hardcointier1",
                "desc": "65\u00d72 Crystals (1st purchase)",
                "type": ProductType.PRODUCT_LIMIT,
                "payHcoin": 65,
                "freeHcoin": 65,
                "price": 99,
                "leftBuyTimes": 1,
                "id": 458,
                "mcoin": 0,
                "priceTier": "Tier_1"
            },
            {
                "name": "asiafirst2hardcointier5",
                "desc": "330\u00d72 Crystals (1st purchase)",
                "type": ProductType.PRODUCT_LIMIT,
                "payHcoin": 330,
                "freeHcoin": 330,
                "price": 499,
                "leftBuyTimes": 1,
                "id": 459,
                "mcoin": 0,
                "priceTier": "Tier_5"
            },
            {
                "name": "asiafirst2hardcointier10",
                "desc": "660\u00d72 Crystals (1st purchase)",
                "type": ProductType.PRODUCT_LIMIT,
                "payHcoin": 660,
                "freeHcoin": 660,
                "price": 999,
                "leftBuyTimes": 1,
                "id": 460,
                "mcoin": 0,
                "priceTier": "Tier_10"
            },
            {
                "name": "asiafirst2hardcointier20",
                "desc": "1320\u00d72 Crystals (1st purchase)",
                "type": ProductType.PRODUCT_LIMIT,
                "payHcoin": 1320,
                "freeHcoin": 1320,
                "price": 1999,
                "leftBuyTimes": 1,
                "id": 461,
                "mcoin": 0,
                "priceTier": "Tier_20"
            },
            {
                "name": "asiafirst2hardcointier50",
                "desc": "3300\u00d72 Crystals (1st purchase)",
                "type": ProductType.PRODUCT_LIMIT,
                "payHcoin": 3300,
                "freeHcoin": 3300,
                "price": 4999,
                "leftBuyTimes": 1,
                "id": 462,
                "mcoin": 0,
                "priceTier": "Tier_50"
            },
            {
                "name": "asiafirst2hardcointier60",
                "desc": "6600\u00d72 Crystals (1st purchase)",
                "type": ProductType.PRODUCT_LIMIT,
                "payHcoin": 6600,
                "freeHcoin": 6600,
                "price": 9999,
                "leftBuyTimes": 1,
                "id": 463,
                "mcoin": 0,
                "priceTier": "Tier_60"
            },
            {
                "name": "smsTH01",
                "desc": "",
                "type": ProductType.PRODUCT_NORMAL,
                "payHcoin": 10,
                "freeHcoin": 0,
                "price": 500,
                "id": 413,
                "mcoin": 0,
                "priceTier": "Tier_1"
            },
            {
                "name": "smsTH02",
                "desc": "",
                "type": ProductType.PRODUCT_NORMAL,
                "payHcoin": 20,
                "freeHcoin": 0,
                "price": 1000,
                "id": 414,
                "mcoin": 0,
                "priceTier": "Tier_2"
            },
            {
                "name": "smsTH03",
                "desc": "",
                "type": ProductType.PRODUCT_NORMAL,
                "payHcoin": 40,
                "freeHcoin": 0,
                "price": 2000,
                "id": 415,
                "mcoin": 0,
                "priceTier": "Tier_3"
            },
            {
                "name": "smsTH04",
                "desc": "",
                "type": ProductType.PRODUCT_NORMAL,
                "payHcoin": 60,
                "freeHcoin": 0,
                "price": 3000,
                "id": 416,
                "mcoin": 0,
                "priceTier": "Tier_4"
            },
            {
                "name": "smsTH05",
                "desc": "",
                "type": ProductType.PRODUCT_NORMAL,
                "payHcoin": 100,
                "freeHcoin": 0,
                "price": 5000,
                "id": 417,
                "mcoin": 0,
                "priceTier": "Tier_5"
            },
            {
                "name": "smsTH06",
                "desc": "",
                "type": ProductType.PRODUCT_NORMAL,
                "payHcoin": 200,
                "freeHcoin": 0,
                "price": 10000,
                "id": 418,
                "mcoin": 0,
                "priceTier": "Tier_6"
            },
            {
                "name": "smsTH07",
                "desc": "",
                "type": ProductType.PRODUCT_NORMAL,
                "payHcoin": 300,
                "freeHcoin": 0,
                "price": 15000,
                "id": 419,
                "mcoin": 0,
                "priceTier": "Tier_7"
            },
            {
                "name": "smsTH08",
                "desc": "",
                "type": ProductType.PRODUCT_NORMAL,
                "payHcoin": 400,
                "freeHcoin": 0,
                "price": 20000,
                "id": 420,
                "mcoin": 0,
                "priceTier": "Tier_8"
            },
            {
                "name": "smsTH09",
                "desc": "",
                "type": ProductType.PRODUCT_NORMAL,
                "payHcoin": 500,
                "freeHcoin": 0,
                "price": 25000,
                "id": 421,
                "mcoin": 0,
                "priceTier": "Tier_9"
            },
            {
                "name": "smsIDN01",
                "desc": "",
                "type": ProductType.PRODUCT_NORMAL,
                "payHcoin": 25,
                "freeHcoin": 0,
                "price": 500000,
                "id": 422,
                "mcoin": 0,
                "priceTier": "Tier_1"
            },
            {
                "name": "smsIDN02",
                "desc": "",
                "type": ProductType.PRODUCT_NORMAL,
                "payHcoin": 50,
                "freeHcoin": 0,
                "price": 1000000,
                "id": 423,
                "mcoin": 0,
                "priceTier": "Tier_2"
            },
            {
                "name": "smsIDN03",
                "desc": "",
                "type": ProductType.PRODUCT_NORMAL,
                "payHcoin": 100,
                "freeHcoin": 0,
                "price": 2000000,
                "id": 424,
                "mcoin": 0,
                "priceTier": "Tier_3"
            },
            {
                "name": "smsIDN04",
                "desc": "",
                "type": ProductType.PRODUCT_NORMAL,
                "payHcoin": 125,
                "freeHcoin": 0,
                "price": 2500000,
                "id": 425,
                "mcoin": 0,
                "priceTier": "Tier_4"
            },
            {
                "name": "smsIDN05",
                "desc": "",
                "type": ProductType.PRODUCT_NORMAL,
                "payHcoin": 250,
                "freeHcoin": 0,
                "price": 5000000,
                "id": 426,
                "mcoin": 0,
                "priceTier": "Tier_5"
            },
            {
                "name": "smsIDN06",
                "desc": "",
                "type": ProductType.PRODUCT_NORMAL,
                "payHcoin": 500,
                "freeHcoin": 0,
                "price": 10000000,
                "id": 427,
                "mcoin": 0,
                "priceTier": "Tier_6"
            },
            {
                "name": "smsIDN07",
                "desc": "",
                "type": ProductType.PRODUCT_NORMAL,
                "payHcoin": 1000,
                "freeHcoin": 0,
                "price": 20000000,
                "id": 428,
                "mcoin": 0,
                "priceTier": "Tier_7"
            },
            {
                "name": "asiamcointier1",
                "desc": "Regular bundle 25",
                "type": ProductType.PRODUCT_MCOIN,
                "payHcoin": 0,
                "freeHcoin": 0,
                "price": 99,
                "id": 471,
                "mcoin": 65,
                "priceTier": "Tier_1"
            },
            {
                "name": "asiamcointier5",
                "desc": "Regular bundle 26",
                "type": ProductType.PRODUCT_MCOIN,
                "payHcoin": 0,
                "freeHcoin": 0,
                "price": 499,
                "id": 472,
                "mcoin": 330,
                "priceTier": "Tier_5"
            },
            {
                "name": "asiamcointier15",
                "desc": "Regular bundle 30",
                "type": ProductType.PRODUCT_MCOIN,
                "payHcoin": 0,
                "freeHcoin": 0,
                "price": 1499,
                "id": 478,
                "mcoin": 990,
                "priceTier": "Tier_15"
            },
            {
                "name": "asiamcointier20",
                "desc": "Regular bundle 27",
                "type": ProductType.PRODUCT_MCOIN,
                "payHcoin": 0,
                "freeHcoin": 0,
                "price": 1999,
                "id": 473,
                "mcoin": 1320,
                "priceTier": "Tier_20"
            },
            {
                "name": "asiamcointier30",
                "desc": "Regular bundle 31",
                "type": ProductType.PRODUCT_MCOIN,
                "payHcoin": 0,
                "freeHcoin": 0,
                "price": 2999,
                "id": 479,
                "mcoin": 1980,
                "priceTier": "Tier_30"
            },
            {
                "name": "asiamcointier50",
                "desc": "Regular bundle 28",
                "type": ProductType.PRODUCT_MCOIN,
                "payHcoin": 0,
                "freeHcoin": 0,
                "price": 4999,
                "id": 474,
                "mcoin": 3300,
                "priceTier": "Tier_50"
            },
            {
                "name": "asiamcointier60",
                "desc": "Regular bundle 29",
                "type": ProductType.PRODUCT_MCOIN,
                "payHcoin": 0,
                "freeHcoin": 0,
                "price": 9999,
                "id": 475,
                "mcoin": 6600,
                "priceTier": "Tier_60"
            },
            {
                "name": "asiapromotfixed2box1",
                "desc": "FixedProductRewardpromote7",
                "type": ProductType.PRODUCT_FIXED_BOX,
                "payHcoin": 1,
                "freeHcoin": 0,
                "price": 0,
                "leftBuyTimes": 999,
                "boxRewardList": [
                    {
                        "itemList": [
                            {
                                "id": 1103,
                                "level": 0,
                                "num": 1
                            },
                            {
                                "id": 1110,
                                "level": 0,
                                "num": 3
                            },
                            {
                                "id": 1060259,
                                "level": 0,
                                "num": 3
                            }
                        ]
                    }
                ],
                "isAddHcoin": false,
                "endTime": 1917028799,
                "sortPriority": 1,
                "isShowPic": false,
                "picPath": "event/Immediately/magicaldress",
                "detail": "FixedProductRewardpromote7",
                "id": 452,
                "mcoin": 0,
                "productGoodsId": 0,
                "priceTier": "Tier_1"
            },
            {
                "name": "asiapromotfixed2box2",
                "desc": "FixedProductRewardpromote8",
                "type": ProductType.PRODUCT_FIXED_BOX,
                "payHcoin": 1,
                "freeHcoin": 0,
                "price": 0,
                "leftBuyTimes": 999,
                "boxRewardList": [
                    {
                        "itemList": [
                            {
                                "id": 1102,
                                "level": 0,
                                "num": 2
                            },
                            {
                                "id": 1110,
                                "level": 0,
                                "num": 4
                            },
                            {
                                "id": 4004,
                                "level": 0,
                                "num": 5
                            },
                            {
                                "id": 1060259,
                                "level": 0,
                                "num": 4
                            }
                        ]
                    }
                ],
                "isAddHcoin": false,
                "endTime": 1917028799,
                "sortPriority": 1,
                "isShowPic": false,
                "picPath": "event/Immediately/magicaldress",
                "detail": "FixedProductRewardpromote8",
                "id": 453,
                "mcoin": 0,
                "productGoodsId": 0,
                "priceTier": "Tier_2"
            },
            {
                "name": "asiapromotfixed2box3",
                "desc": "FixedProductRewardpromote9",
                "type": ProductType.PRODUCT_FIXED_BOX,
                "payHcoin": 1,
                "freeHcoin": 0,
                "price": 0,
                "leftBuyTimes": 999,
                "boxRewardList": [
                    {
                        "itemList": [
                            {
                                "id": 1102,
                                "level": 0,
                                "num": 2
                            },
                            {
                                "id": 1103,
                                "level": 0,
                                "num": 2
                            },
                            {
                                "id": 1110,
                                "level": 0,
                                "num": 5
                            },
                            {
                                "id": 2008,
                                "level": 0,
                                "num": 10
                            },
                            {
                                "id": 1060259,
                                "level": 0,
                                "num": 5
                            }
                        ]
                    }
                ],
                "isAddHcoin": false,
                "endTime": 1917028799,
                "sortPriority": 1,
                "isShowPic": false,
                "picPath": "event/Immediately/magicaldress",
                "detail": "FixedProductRewardpromote9",
                "id": 454,
                "mcoin": 0,
                "productGoodsId": 0,
                "priceTier": "Tier_3"
            },
            {
                "name": "asiapromotfixed2box4",
                "desc": "FixedProductRewardpromote10",
                "type": ProductType.PRODUCT_FIXED_BOX,
                "payHcoin": 1,
                "freeHcoin": 0,
                "price": 0,
                "leftBuyTimes": 999,
                "boxRewardList": [
                    {
                        "itemList": [
                            {
                                "id": 1102,
                                "level": 0,
                                "num": 3
                            },
                            {
                                "id": 1103,
                                "level": 0,
                                "num": 3
                            },
                            {
                                "id": 1110,
                                "level": 0,
                                "num": 10
                            },
                            {
                                "id": 4004,
                                "level": 0,
                                "num": 10
                            },
                            {
                                "id": 1060259,
                                "level": 0,
                                "num": 10
                            }
                        ]
                    }
                ],
                "isAddHcoin": false,
                "endTime": 1917028799,
                "sortPriority": 1,
                "isShowPic": false,
                "picPath": "event/Immediately/magicaldress",
                "detail": "FixedProductRewardpromote10",
                "id": 455,
                "mcoin": 0,
                "productGoodsId": 0,
                "priceTier": "Tier_4"
            },
            {
                "name": "asiapromotfixedbox5",
                "desc": "FixedProductRewardpromote5",
                "type": ProductType.PRODUCT_FIXED_BOX,
                "payHcoin": 1,
                "freeHcoin": 0,
                "price": 0,
                "leftBuyTimes": 999,
                "boxRewardList": [
                    {
                        "itemList": [
                            {
                                "id": 100,
                                "level": 0,
                                "num": 50000
                            },
                            {
                                "id": 7033,
                                "level": 0,
                                "num": 1
                            }
                        ]
                    }
                ],
                "isAddHcoin": false,
                "endTime": 1917028799,
                "sortPriority": 1,
                "isShowPic": false,
                "picPath": "event/Immediately/magicaldress",
                "detail": "FixedProductRewardpromote5",
                "id": 443,
                "mcoin": 0,
                "productGoodsId": 0,
                "priceTier": "Tier_5"
            },
            {
                "name": "asiapromotfixedbox6",
                "desc": "FixedProductRewardpromote6",
                "type": ProductType.PRODUCT_FIXED_BOX,
                "payHcoin": 1,
                "freeHcoin": 0,
                "price": 0,
                "leftBuyTimes": 999,
                "boxRewardList": [
                    {
                        "itemList": [
                            {
                                "id": 1103,
                                "level": 0,
                                "num": 1
                            },
                            {
                                "id": 3008,
                                "level": 0,
                                "num": 10
                            }
                        ]
                    }
                ],
                "isAddHcoin": false,
                "endTime": 1917028799,
                "sortPriority": 1,
                "isShowPic": false,
                "picPath": "event/Immediately/magicaldress",
                "detail": "FixedProductRewardpromote6",
                "id": 444,
                "mcoin": 0,
                "productGoodsId": 0,
                "priceTier": "Tier_6"
            }
        ] as Partial<Product>[],
        "nextLimitProductRefreshTime": 1924963200
    } as GetProductListRsp)
}