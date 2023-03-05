import net from "net"
import { GetShopListReq, GetShopListRsp, GetShopListRsp_CmdId, GetShopListRsp_Retcode, Goods_RefreshTimeType, Goods_ShowType } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetShopListReq) => {
    Packet.getInstance().serializeAndSend(socket, GetShopListRsp_CmdId.CMD_ID, {
        retcode: GetShopListRsp_Retcode.SUCC,
        shopList: [
            {
                "shopId": 1,
                "isOpen": true,
                "textMapName": "ShopName1",
                "shopIconPath": "SpriteOutput\\ShopTabIcons\\IconShopChange",
                "goodsList": [
                    {
                        "goodsId": 100302,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 10215,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 10305,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 10414,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 10506,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 10604,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 10711,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 9408,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 2051207999
                    }
                ],
                "nextAutoRefreshTime": 1678046400,
                "manualRefreshTimes": 0,
                "refreshItem": 0,
                "nextRefreshCost": 100,
                "maxManualRefreshTimes": 2,
                "shopType": 1,
                "currencyList": [
                    100,
                    5
                ],
                "scheduleChangeTime": 2051208000,
                "shopName": "ShopName1",
                "unlockLevel": 1,
                "beginTime": 1573675200,
                "endTime": 2051207999,
                "isHot": true,
                "multiCurrency": 1,
                "isDoubleConfirm": false,
                "isShow": true,
                "sortPriority": 1,
                "toolbarCurrencyList": [
                    1,
                    2,
                    3
                ],
                "newCurrencyList": [
                    100,
                    5
                ],
                "freeManualRefreshTimes": 0
            },
            {
                "shopId": 52,
                "isOpen": true,
                "textMapName": "ShopName52",
                "shopIconPath": "SpriteOutput\\ShopTabIcons\\IconShopEvent",
                "goodsList": [
                    {
                        "goodsId": 36331,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 1681329599
                    },
                    {
                        "goodsId": 36332,
                        "buyTimes": 1,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 1681329599
                    },
                    {
                        "goodsId": 36333,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 1681329599,
                        "showType": Goods_ShowType.LOCK_SHOW,
                        "unlockTips": "PoolUnlockTips_533",
                        "unlockType": 15,
                        "unlockParaInt": 0,
                        "unlockParaStr": "676098"
                    },
                    {
                        "goodsId": 36334,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 1681329599,
                        "showType": Goods_ShowType.LOCK_SHOW,
                        "unlockTips": "PoolUnlockTips_534",
                        "unlockType": 15,
                        "unlockParaInt": 0,
                        "unlockParaStr": "676099"
                    },
                    {
                        "goodsId": 36335,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 1681329599,
                        "showType": Goods_ShowType.LOCK_SHOW,
                        "unlockTips": "PoolUnlockTips_535",
                        "unlockType": 15,
                        "unlockParaInt": 0,
                        "unlockParaStr": "676100"
                    },
                    {
                        "goodsId": 36336,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 1681329599,
                        "showType": Goods_ShowType.LOCK_SHOW,
                        "unlockTips": "PoolUnlockTips_536",
                        "unlockType": 15,
                        "unlockParaInt": 0,
                        "unlockParaStr": "676101"
                    },
                    {
                        "goodsId": 36337,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 1681329599,
                        "showType": Goods_ShowType.LOCK_SHOW,
                        "unlockTips": "PoolUnlockTips_537",
                        "unlockType": 15,
                        "unlockParaInt": 0,
                        "unlockParaStr": "676102"
                    },
                    {
                        "goodsId": 36338,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 1681329599
                    },
                    {
                        "goodsId": 36339,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 1681329599
                    },
                    {
                        "goodsId": 36340,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 1681329599
                    },
                    {
                        "goodsId": 36341,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 1681329599
                    },
                    {
                        "goodsId": 36342,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 1681329599
                    },
                    {
                        "goodsId": 36343,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 1681329599
                    },
                    {
                        "goodsId": 36344,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 1681329599
                    }
                ],
                "nextAutoRefreshTime": 1678046400,
                "manualRefreshTimes": 0,
                "refreshItem": 0,
                "nextRefreshCost": 4294967295,
                "maxManualRefreshTimes": 0,
                "shopType": 3,
                "currencyList": [
                    122701
                ],
                "scheduleChangeTime": 1681329600,
                "shopName": "\u6d3b\u52a8\u5546\u5e97",
                "unlockLevel": 30,
                "beginTime": 1673467200,
                "endTime": 1681329599,
                "isHot": false,
                "multiCurrency": 1,
                "isDoubleConfirm": false,
                "isShow": true,
                "sortPriority": 10,
                "toolbarCurrencyList": [
                    1,
                    2,
                    3
                ],
                "newCurrencyList": [
                    122701
                ],
                "freeManualRefreshTimes": 0
            },
            {
                "shopId": 5,
                "isOpen": true,
                "textMapName": "ShopName5",
                "shopIconPath": "SpriteOutput\\ShopTabIcons\\IconShopMemory",
                "goodsList": [
                    {
                        "goodsId": 588,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.WEEK_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 587,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.WEEK_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 586,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.WEEK_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 585,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.WEEK_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 584,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.WEEK_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 583,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.WEEK_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 581,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.WEEK_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 577,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.WEEK_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 575,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.WEEK_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 589,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.WEEK_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 574,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.MONTH_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 570,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.WEEK_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 576,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.WEEK_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 220011,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.MONTH_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 612031,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.DAY_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 579,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.WEEK_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 571,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.WEEK_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 578,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.WEEK_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 573,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.WEEK_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 564,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.WEEK_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 550,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.WEEK_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 544,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.WEEK_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 590,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.DAY_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 591,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.DAY_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 592,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.DAY_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 593,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.DAY_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 594,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.DAY_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 595,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.DAY_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 602,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.DAY_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 596,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.DAY_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 582,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.DAY_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 533,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.DAY_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 534,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.DAY_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 598,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.WEEK_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 597,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.DAY_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 572,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.MONTH_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 630371,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.DAY_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 630451,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.DAY_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 651121,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.DAY_TYPE,
                        "endTime": 2051207999
                    }
                ],
                "nextAutoRefreshTime": 1678046400,
                "manualRefreshTimes": 0,
                "refreshItem": 0,
                "nextRefreshCost": 4294967295,
                "maxManualRefreshTimes": 0,
                "shopType": 4,
                "currencyList": [
                    5,
                    9004,
                    8008
                ],
                "scheduleChangeTime": 2051208000,
                "shopName": "ShopName5",
                "unlockLevel": 20,
                "beginTime": 1590955200,
                "endTime": 2051207999,
                "isHot": false,
                "multiCurrency": 1,
                "isDoubleConfirm": false,
                "isShow": true,
                "sortPriority": 8,
                "toolbarCurrencyList": [
                    1,
                    3,
                    5
                ],
                "newCurrencyList": [
                    5,
                    9004,
                    8008
                ],
                "freeManualRefreshTimes": 0
            },
            {
                "shopId": 9,
                "isOpen": true,
                "textMapName": "ShopName6",
                "shopIconPath": "SpriteOutput\\ShopTabIcons\\IconShopArmada",
                "goodsList": [
                    {
                        "goodsId": 9226,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.MONTH_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 9273,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.DAY_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 9252,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.WEEK_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 9247,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.WEEK_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 9242,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.WEEK_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 9272,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.WEEK_TYPE,
                        "endTime": 2051207999
                    }
                ],
                "nextAutoRefreshTime": 1678046400,
                "manualRefreshTimes": 0,
                "refreshItem": 0,
                "nextRefreshCost": 4294967295,
                "maxManualRefreshTimes": 0,
                "shopType": 5,
                "currencyList": [
                    9101
                ],
                "scheduleChangeTime": 2051208000,
                "shopName": "ShopName6",
                "unlockLevel": 10,
                "beginTime": 1580414400,
                "endTime": 2051207999,
                "isHot": true,
                "multiCurrency": 0,
                "isDoubleConfirm": false,
                "isShow": true,
                "sortPriority": 2,
                "toolbarCurrencyList": [
                    1,
                    3,
                    5
                ],
                "newCurrencyList": [
                    9101
                ],
                "freeManualRefreshTimes": 0
            },
            {
                "shopId": 16,
                "isOpen": true,
                "textMapName": "ShopName7",
                "shopIconPath": "SpriteOutput/ShopTabIcons/IconShopExchange",
                "goodsList": [
                    {
                        "goodsId": 2024,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 1905710399
                    },
                    {
                        "goodsId": 2028,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 1905710399
                    },
                    {
                        "goodsId": 1680,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 1905710399
                    },
                    {
                        "goodsId": 1612,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 1905710399
                    },
                    {
                        "goodsId": 1673,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 1905710399
                    },
                    {
                        "goodsId": 1671,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 1905710399
                    },
                    {
                        "goodsId": 1664,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 1905710399
                    },
                    {
                        "goodsId": 1667,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 1905710399
                    }
                ],
                "nextAutoRefreshTime": 1678046400,
                "manualRefreshTimes": 0,
                "refreshItem": 5,
                "nextRefreshCost": 0,
                "maxManualRefreshTimes": 699,
                "shopType": 7,
                "currencyList": [
                    8004,
                    8008
                ],
                "scheduleChangeTime": 1905710400,
                "shopName": "ShopName7",
                "unlockLevel": 24,
                "allGoodsIdList": [
                    1601,
                    1602,
                    1603,
                    1604,
                    1605,
                    1606,
                    1607,
                    1608,
                    1609,
                    1610,
                    1611,
                    1612,
                    1613,
                    1614,
                    1615,
                    1616,
                    1617,
                    1618,
                    1619,
                    1620,
                    1621,
                    1622,
                    1623,
                    1624,
                    1625,
                    1626,
                    1627,
                    1628,
                    1629,
                    1630,
                    1631,
                    1632,
                    1633,
                    1643,
                    1644,
                    1645,
                    1646,
                    1647,
                    1648,
                    1649,
                    1650,
                    1651,
                    1652,
                    1653,
                    1654,
                    1655,
                    1656,
                    1657,
                    1658,
                    1659,
                    1660,
                    1661,
                    1662,
                    1663,
                    1664,
                    1665,
                    1666,
                    1667,
                    1668,
                    1669,
                    1670,
                    1671,
                    1672,
                    1673,
                    1674,
                    1675,
                    1676,
                    1677,
                    1678,
                    1679,
                    1680,
                    1681,
                    1682,
                    1683,
                    1684,
                    1685,
                    1686,
                    1687,
                    1688,
                    1689,
                    1690,
                    1691,
                    1692,
                    1693,
                    1694,
                    1695,
                    1696,
                    1697,
                    1698,
                    1699,
                    1700,
                    1701,
                    1702,
                    1703,
                    1704,
                    1705,
                    1706,
                    1707,
                    1708,
                    1709,
                    1710,
                    1711,
                    1712,
                    1713,
                    1714,
                    1715,
                    1716,
                    1717,
                    1718,
                    1719,
                    1720,
                    1721,
                    1722,
                    1723,
                    1724,
                    1725,
                    1726,
                    1727,
                    1728,
                    1729,
                    1730,
                    1731,
                    1732,
                    1733,
                    1734,
                    1735,
                    1736,
                    1737,
                    1738,
                    1739,
                    1740,
                    1741,
                    1742,
                    1743,
                    1744,
                    1745,
                    1746,
                    1747,
                    1748,
                    1749,
                    1750,
                    1751,
                    1752,
                    1753,
                    1754,
                    1755,
                    1756,
                    2001,
                    2002,
                    2003,
                    2004,
                    2005,
                    2006,
                    2007,
                    2008,
                    2009,
                    2010,
                    2011,
                    2012,
                    2013,
                    2014,
                    2015,
                    2016,
                    2017,
                    2018,
                    2019,
                    2020,
                    2021,
                    2022,
                    2023,
                    2024,
                    2025,
                    2026,
                    2027,
                    2028,
                    2029,
                    2030,
                    2031,
                    2032,
                    2033,
                    2034,
                    2035,
                    2036,
                    2037,
                    2038,
                    2039,
                    2040,
                    2041,
                    2042,
                    2043,
                    2044,
                    2045,
                    2046,
                    2047,
                    2048,
                    2049,
                    2050,
                    2051,
                    2052,
                    2053,
                    2054,
                    2055,
                    2056,
                    2057,
                    2058,
                    2059,
                    2060,
                    2061,
                    2062,
                    2063,
                    2064,
                    2065,
                    2066
                ],
                "beginTime": 1598212800,
                "endTime": 1905710399,
                "isHot": false,
                "multiCurrency": 0,
                "isDoubleConfirm": true,
                "isShow": true,
                "sortPriority": 18,
                "toolbarCurrencyList": [
                    1,
                    3,
                    5
                ],
                "newCurrencyList": [
                    8004,
                    8008
                ],
                "freeManualRefreshTimes": 6
            },
            {
                "shopId": 17,
                "isOpen": true,
                "textMapName": "ShopName8",
                "shopIconPath": "SpriteOutput\\ShopTabIcons\\IconShopConfidential",
                "goodsList": [
                    {
                        "goodsId": 630461,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.DAY_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 630471,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.DAY_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 630481,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.DAY_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 630491,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.DAY_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 630501,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.DAY_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 630511,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.DAY_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 630521,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.DAY_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 630531,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.DAY_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 630541,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.DAY_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 630551,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.DAY_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 630561,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.DAY_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 630571,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.DAY_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 641131,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 2051207999
                    }
                ],
                "nextAutoRefreshTime": 1678046400,
                "manualRefreshTimes": 0,
                "refreshItem": 0,
                "nextRefreshCost": 4294967295,
                "maxManualRefreshTimes": 0,
                "shopType": 8,
                "scheduleChangeTime": 1680465600,
                "shopName": "ShopName8",
                "unlockLevel": 1,
                "beginTime": 1643227200,
                "endTime": 1680465599,
                "isHot": false,
                "multiCurrency": 0,
                "isDoubleConfirm": false,
                "isShow": true,
                "sortPriority": 10,
                "toolbarCurrencyList": [
                    1,
                    2,
                    3
                ],
                "freeManualRefreshTimes": 0
            },
            {
                "shopId": 15,
                "isOpen": true,
                "textMapName": "ShopName9",
                "shopIconPath": "SpriteOutput\\ShopTabIcons\\IconShopMP",
                "goodsList": [
                    {
                        "goodsId": 9343,
                        "buyTimes": 2,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.VERSION_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 9357,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.MONTH_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 9344,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.MONTH_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 9345,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.MONTH_TYPE,
                        "endTime": 2051207999
                    }
                ],
                "nextAutoRefreshTime": 1678046400,
                "manualRefreshTimes": 0,
                "refreshItem": 0,
                "nextRefreshCost": 4294967295,
                "maxManualRefreshTimes": 0,
                "shopType": 9,
                "currencyList": [
                    5569,
                    9004
                ],
                "scheduleChangeTime": 2051208000,
                "shopName": "ShopName9",
                "unlockLevel": 15,
                "beginTime": 1573675200,
                "endTime": 2051207999,
                "isHot": false,
                "multiCurrency": 1,
                "isDoubleConfirm": false,
                "isShow": true,
                "sortPriority": 15,
                "toolbarCurrencyList": [
                    1,
                    3,
                    5
                ],
                "newCurrencyList": [
                    5569,
                    9004
                ],
                "freeManualRefreshTimes": 0
            },
            {
                "shopId": 18,
                "isOpen": true,
                "textMapName": "ShopName18",
                "shopIconPath": "SpriteOutput\\ShopTabIcons\\IconShopMoon",
                "goodsList": [
                    {
                        "goodsId": 599,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.MONTH_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 180584,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 180521,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 180451,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 180441,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 180461,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 180471,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 180501,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 180591,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.WEEK_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 180592,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.WEEK_TYPE,
                        "endTime": 2051207999,
                        "showType": Goods_ShowType.LOCK_SHOW,
                        "unlockTips": "PoolUnlockTips_508",
                        "unlockType": 15,
                        "unlockParaInt": 0,
                        "unlockParaStr": "101247"
                    },
                    {
                        "goodsId": 180594,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.WEEK_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 180595,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.WEEK_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 180585,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.WEEK_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 180583,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.WEEK_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 180421,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.WEEK_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 180411,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.WEEK_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 180431,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.WEEK_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 180231,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.WEEK_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 180587,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.WEEK_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 180241,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.WEEK_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 180251,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.WEEK_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 180101,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.WEEK_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 180041,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.WEEK_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 180071,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.WEEK_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 180091,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.WEEK_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 622,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.WEEK_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 604,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.WEEK_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 180589,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.MONTH_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 180031,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.DAY_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 180051,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.DAY_TYPE,
                        "endTime": 2051207999
                    }
                ],
                "nextAutoRefreshTime": 1678046400,
                "manualRefreshTimes": 0,
                "refreshItem": 0,
                "nextRefreshCost": 4294967295,
                "maxManualRefreshTimes": 0,
                "shopType": 10,
                "currencyList": [
                    9139,
                    3101
                ],
                "scheduleChangeTime": 2051208000,
                "shopName": "ShopName18",
                "unlockLevel": 38,
                "beginTime": 1573675200,
                "endTime": 2051207999,
                "isHot": false,
                "multiCurrency": 1,
                "isDoubleConfirm": false,
                "isShow": true,
                "sortPriority": 7,
                "toolbarCurrencyList": [
                    1,
                    3,
                    5
                ],
                "newCurrencyList": [
                    9139,
                    3101
                ],
                "freeManualRefreshTimes": 0
            },
            {
                "shopId": 20,
                "isOpen": true,
                "textMapName": "ShopName20",
                "shopIconPath": "SpriteOutput\\ShopTabIcons\\IconShopMentoring",
                "goodsList": [
                    {
                        "goodsId": 620351,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 620341,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 620261,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 620271,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 620281,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 620291,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 620301,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 620311,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 620321,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 620331,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 620071,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 620081,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 620091,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 620101,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 2051207999
                    }
                ],
                "nextAutoRefreshTime": 1678046400,
                "manualRefreshTimes": 0,
                "refreshItem": 0,
                "nextRefreshCost": 4294967295,
                "maxManualRefreshTimes": 0,
                "shopType": 12,
                "currencyList": [
                    3107
                ],
                "scheduleChangeTime": 2051208000,
                "shopName": "ShopName20",
                "unlockLevel": 61,
                "beginTime": 1573675200,
                "endTime": 2051207999,
                "isHot": false,
                "multiCurrency": 0,
                "isDoubleConfirm": false,
                "isShow": true,
                "sortPriority": 20,
                "toolbarCurrencyList": [
                    1,
                    3,
                    5
                ],
                "newCurrencyList": [
                    3107
                ],
                "freeManualRefreshTimes": 0
            },
            {
                "shopId": 22,
                "isOpen": true,
                "textMapName": "ShopName22",
                "shopIconPath": "SpriteOutput\\ShopTabIcons\\IconShopFragment",
                "goodsList": [
                    {
                        "goodsId": 719811,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 1679630400,
                        "showType": Goods_ShowType.LOCK_SHOW,
                        "unlockTips": "PoolUnlockTips_236",
                        "unlockType": 18,
                        "unlockParaInt": 105,
                        "unlockParaStr": ""
                    },
                    {
                        "goodsId": 719812,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 1679630400
                    },
                    {
                        "goodsId": 719813,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 1679630400
                    },
                    {
                        "goodsId": 719814,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 1679630400
                    },
                    {
                        "goodsId": 719815,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 1679630400
                    },
                    {
                        "goodsId": 719816,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 1679630400
                    },
                    {
                        "goodsId": 719817,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 1679630400
                    },
                    {
                        "goodsId": 719818,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 1679630400
                    },
                    {
                        "goodsId": 719819,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 1679630400
                    },
                    {
                        "goodsId": 719820,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 1679630400
                    },
                    {
                        "goodsId": 719821,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 1679630400
                    }
                ],
                "nextAutoRefreshTime": 1678046400,
                "manualRefreshTimes": 0,
                "refreshItem": 0,
                "nextRefreshCost": 4294967295,
                "maxManualRefreshTimes": 0,
                "shopType": 13,
                "currencyList": [
                    116125
                ],
                "scheduleChangeTime": 1679630401,
                "shopName": "\u5468\u5e74\u7d2f\u6d88\u5546\u5e97",
                "unlockLevel": 15,
                "beginTime": 1676491200,
                "endTime": 1679630400,
                "isHot": true,
                "multiCurrency": 0,
                "isDoubleConfirm": false,
                "isShow": true,
                "sortPriority": 22,
                "toolbarCurrencyList": [
                    1,
                    2,
                    3
                ],
                "newCurrencyList": [
                    116125
                ],
                "freeManualRefreshTimes": 0
            },
            {
                "shopId": 23,
                "isOpen": true,
                "textMapName": "ShopName23",
                "shopIconPath": "SpriteOutput\\ShopTabIcons\\IconShopFragment",
                "goodsList": [
                    {
                        "goodsId": 652031,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.DAY_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 652061,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.DAY_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 652071,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.DAY_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 652081,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.DAY_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 652101,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.DAY_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 653011,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.DAY_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 653021,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.DAY_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 653031,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.DAY_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 653041,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.DAY_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 653051,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.DAY_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 653061,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.DAY_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 653071,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.DAY_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 653081,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.DAY_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 653091,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.DAY_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 653101,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.DAY_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 653111,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.DAY_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 653121,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.DAY_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 653131,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.DAY_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 653141,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.DAY_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 653151,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.DAY_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 653161,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.DAY_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 653171,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.DAY_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 653181,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.DAY_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 653191,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.DAY_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 653201,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.DAY_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 653211,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.DAY_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 653221,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.DAY_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 653231,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.DAY_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 653241,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.DAY_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 653251,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.DAY_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 653261,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.DAY_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 653271,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.DAY_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 653281,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.DAY_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 653282,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.DAY_TYPE,
                        "endTime": 2051207999
                    }
                ],
                "nextAutoRefreshTime": 1678046400,
                "manualRefreshTimes": 0,
                "refreshItem": 0,
                "nextRefreshCost": 4294967295,
                "maxManualRefreshTimes": 0,
                "shopType": 14,
                "currencyList": [
                    3129,
                    3130,
                    3134
                ],
                "scheduleChangeTime": 2051208000,
                "shopName": "ShopName23",
                "unlockLevel": 30,
                "beginTime": 1573675200,
                "endTime": 2051207999,
                "isHot": false,
                "multiCurrency": 0,
                "isDoubleConfirm": false,
                "isShow": true,
                "sortPriority": 23,
                "toolbarCurrencyList": [
                    1,
                    3,
                    5
                ],
                "newCurrencyList": [
                    3129,
                    3130,
                    3134
                ],
                "freeManualRefreshTimes": 0
            },
            {
                "shopId": 33,
                "isOpen": true,
                "textMapName": "ShopName33",
                "shopIconPath": "SpriteOutput\\ShopTabIcons\\IconShopNewbie",
                "goodsList": [
                    {
                        "goodsId": 656431,
                        "buyTimes": 1,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.WEEK_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 657242,
                        "buyTimes": 14,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.VERSION_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 656031,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.WEEK_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 656042,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.WEEK_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 662311,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.MONTH_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 656709,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.VERSION_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 656710,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.VERSION_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 656711,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.VERSION_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 656712,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.VERSION_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 656713,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.VERSION_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 656714,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.VERSION_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 656715,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.VERSION_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 656716,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.VERSION_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 656725,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.VERSION_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 656727,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.VERSION_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 656728,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.VERSION_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 656717,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.VERSION_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 656718,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.VERSION_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 656719,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.VERSION_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 656720,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.VERSION_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 656726,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.VERSION_TYPE,
                        "endTime": 2051207999
                    }
                ],
                "nextAutoRefreshTime": 1678046400,
                "manualRefreshTimes": 0,
                "refreshItem": 0,
                "nextRefreshCost": 4294967295,
                "maxManualRefreshTimes": 0,
                "shopType": 21,
                "currencyList": [
                    915,
                    902
                ],
                "scheduleChangeTime": 2051208000,
                "shopName": "\u59d4\u6258\u5546\u5e97",
                "unlockLevel": 28,
                "beginTime": 1572811200,
                "endTime": 2051207999,
                "isHot": true,
                "multiCurrency": 0,
                "isDoubleConfirm": false,
                "isShow": true,
                "sortPriority": 4,
                "toolbarCurrencyList": [
                    1,
                    3,
                    5
                ],
                "newCurrencyList": [
                    915,
                    902
                ],
                "freeManualRefreshTimes": 0
            },
            {
                "shopId": 37,
                "isOpen": true,
                "textMapName": "ShopName37",
                "shopIconPath": "SpriteOutput\\ShopTabIcons\\IconShopMentoring",
                "goodsList": [
                    {
                        "goodsId": 658015,
                        "buyTimes": 2,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.VERSION_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 658002,
                        "buyTimes": 2,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.VERSION_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 658003,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.VERSION_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 658005,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.VERSION_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 658006,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.VERSION_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 658007,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.VERSION_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 658016,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.DAY_TYPE,
                        "endTime": 2051207999
                    }
                ],
                "nextAutoRefreshTime": 1678046400,
                "manualRefreshTimes": 0,
                "refreshItem": 0,
                "nextRefreshCost": 4294967295,
                "maxManualRefreshTimes": 0,
                "shopType": 22,
                "currencyList": [
                    934
                ],
                "scheduleChangeTime": 2051208000,
                "shopName": "\u5bb6\u56ed\u5546\u5e97",
                "unlockLevel": 20,
                "beginTime": 1635969600,
                "endTime": 2051207999,
                "isHot": false,
                "multiCurrency": 0,
                "isDoubleConfirm": false,
                "isShow": true,
                "sortPriority": 37,
                "toolbarCurrencyList": [
                    1,
                    3,
                    5
                ],
                "newCurrencyList": [
                    934
                ],
                "freeManualRefreshTimes": 0
            },
            {
                "shopId": 43,
                "isOpen": true,
                "textMapName": "ShopName43",
                "shopIconPath": "SpriteOutput\\ShopTabIcons\\IconShopFragment",
                "goodsList": [
                    {
                        "goodsId": 664218,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 664219,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 664220,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 663792,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.DAY_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 663822,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.DAY_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 654311,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.DAY_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 654321,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.DAY_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 654331,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.DAY_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 654341,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.DAY_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 654351,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.DAY_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 654361,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.DAY_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 654371,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.DAY_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 654381,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.DAY_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 654391,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.DAY_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 654401,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.DAY_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 654411,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.DAY_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 654421,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.DAY_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 654431,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.DAY_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 654441,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.DAY_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 654451,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.DAY_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 654461,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.DAY_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 654471,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.DAY_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 654481,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.DAY_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 654491,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.DAY_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 654501,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.DAY_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 654511,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.DAY_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 654521,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.DAY_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 654531,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.DAY_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 654541,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.DAY_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 654551,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.DAY_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 663832,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.DAY_TYPE,
                        "endTime": 2051207999
                    }
                ],
                "nextAutoRefreshTime": 1678046400,
                "manualRefreshTimes": 0,
                "refreshItem": 0,
                "nextRefreshCost": 4294967295,
                "maxManualRefreshTimes": 0,
                "shopType": 25,
                "currencyList": [
                    998
                ],
                "scheduleChangeTime": 2051208000,
                "shopName": "\u8865\u7ed9\u4ee3\u5e01\u5546\u5e97",
                "unlockLevel": 15,
                "beginTime": 1637524800,
                "endTime": 2051207999,
                "isHot": false,
                "multiCurrency": 0,
                "isDoubleConfirm": false,
                "isShow": true,
                "sortPriority": 38,
                "toolbarCurrencyList": [
                    1,
                    3,
                    5
                ],
                "newCurrencyList": [
                    998
                ],
                "freeManualRefreshTimes": 0
            },
            {
                "shopId": 44,
                "isOpen": true,
                "textMapName": "ShopName26",
                "shopIconPath": "",
                "goodsList": [
                    {
                        "goodsId": 716298,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.VERSION_TYPE,
                        "endTime": 1913140799
                    },
                    {
                        "goodsId": 716299,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.VERSION_TYPE,
                        "endTime": 1913140799
                    },
                    {
                        "goodsId": 716300,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.VERSION_TYPE,
                        "endTime": 1913140799
                    },
                    {
                        "goodsId": 716301,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.VERSION_TYPE,
                        "endTime": 1913140799
                    },
                    {
                        "goodsId": 716302,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.VERSION_TYPE,
                        "endTime": 1913140799
                    },
                    {
                        "goodsId": 716303,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.VERSION_TYPE,
                        "endTime": 1913140799
                    },
                    {
                        "goodsId": 716304,
                        "buyTimes": 1,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.VERSION_TYPE,
                        "endTime": 1913140799
                    },
                    {
                        "goodsId": 716305,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.VERSION_TYPE,
                        "endTime": 1913140799
                    },
                    {
                        "goodsId": 716306,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.VERSION_TYPE,
                        "endTime": 1913140799
                    },
                    {
                        "goodsId": 716307,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.VERSION_TYPE,
                        "endTime": 1913140799
                    },
                    {
                        "goodsId": 716308,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.VERSION_TYPE,
                        "endTime": 1913140799
                    },
                    {
                        "goodsId": 716309,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.VERSION_TYPE,
                        "endTime": 1913140799
                    },
                    {
                        "goodsId": 716310,
                        "buyTimes": 1,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.VERSION_TYPE,
                        "endTime": 1913140799
                    },
                    {
                        "goodsId": 716311,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.VERSION_TYPE,
                        "endTime": 1913140799
                    },
                    {
                        "goodsId": 716312,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.VERSION_TYPE,
                        "endTime": 1913140799
                    }
                ],
                "nextAutoRefreshTime": 1678046400,
                "manualRefreshTimes": 0,
                "refreshItem": 0,
                "nextRefreshCost": 4294967295,
                "maxManualRefreshTimes": 0,
                "shopType": 26,
                "currencyList": [
                    116620,
                    116621,
                    116622,
                    116623,
                    116624,
                    116626,
                    116627,
                    116628,
                    116629,
                    116631,
                    116632,
                    116633,
                    116634
                ],
                "scheduleChangeTime": 1913140800,
                "shopName": "\u6d3b\u52a8\u5546\u5e97",
                "unlockLevel": 25,
                "beginTime": 1614823200,
                "endTime": 1913140799,
                "isHot": false,
                "multiCurrency": 1,
                "isDoubleConfirm": false,
                "isShow": false,
                "sortPriority": 5,
                "toolbarCurrencyList": [
                    1,
                    2,
                    3
                ],
                "newCurrencyList": [
                    116620,
                    116621,
                    116622,
                    116623,
                    116624,
                    116626,
                    116627,
                    116628,
                    116629,
                    116631,
                    116632,
                    116633,
                    116634
                ],
                "freeManualRefreshTimes": 0
            },
            {
                "shopId": 53,
                "isOpen": true,
                "textMapName": "ShopName53",
                "shopIconPath": "SpriteOutput/Rogue/MissionType/RogueMissionType04",
                "goodsList": [
                    {
                        "goodsId": 718704,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.VERSION_TYPE,
                        "endTime": 2051207999,
                        "showType": Goods_ShowType.LOCK_SHOW,
                        "unlockTips": "PoolUnlockTips_503",
                        "unlockType": 15,
                        "unlockParaInt": 0,
                        "unlockParaStr": "672278"
                    },
                    {
                        "goodsId": 718683,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.VERSION_TYPE,
                        "endTime": 2051207999,
                        "showType": Goods_ShowType.LOCK_SHOW,
                        "unlockTips": "PoolUnlockTips_494",
                        "unlockType": 15,
                        "unlockParaInt": 0,
                        "unlockParaStr": "672277"
                    },
                    {
                        "goodsId": 718110,
                        "buyTimes": 2,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.VERSION_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 718228,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.VERSION_TYPE,
                        "endTime": 2051207999,
                        "showType": Goods_ShowType.LOCK_SHOW,
                        "unlockTips": "PoolUnlockTips_348",
                        "unlockType": 15,
                        "unlockParaInt": 0,
                        "unlockParaStr": "660717"
                    },
                    {
                        "goodsId": 718000,
                        "buyTimes": 4,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.VERSION_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 718001,
                        "buyTimes": 4,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.VERSION_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 718002,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.VERSION_TYPE,
                        "endTime": 2051207999,
                        "showType": Goods_ShowType.LOCK_SHOW,
                        "unlockTips": "PoolUnlockTips_336",
                        "unlockType": 15,
                        "unlockParaInt": 0,
                        "unlockParaStr": "660169"
                    },
                    {
                        "goodsId": 718003,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.WEEK_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 718726,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.WEEK_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 718746,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.VERSION_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 718006,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.WEEK_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 718007,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.WEEK_TYPE,
                        "endTime": 2051207999,
                        "showType": Goods_ShowType.LOCK_SHOW,
                        "unlockTips": "PoolUnlockTips_337",
                        "unlockType": 15,
                        "unlockParaInt": 0,
                        "unlockParaStr": "660167"
                    },
                    {
                        "goodsId": 718005,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.VERSION_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 718591,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.VERSION_TYPE,
                        "endTime": 2051207999,
                        "showType": Goods_ShowType.LOCK_SHOW,
                        "unlockTips": "PoolUnlockTips_366",
                        "unlockType": 15,
                        "unlockParaInt": 0,
                        "unlockParaStr": "671122"
                    },
                    {
                        "goodsId": 718634,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.VERSION_TYPE,
                        "endTime": 2051207999,
                        "showType": Goods_ShowType.LOCK_SHOW,
                        "unlockTips": "PoolUnlockTips_367",
                        "unlockType": 15,
                        "unlockParaInt": 0,
                        "unlockParaStr": "671123"
                    },
                    {
                        "goodsId": 718762,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.VERSION_TYPE,
                        "endTime": 2051207999,
                        "showType": Goods_ShowType.LOCK_SHOW,
                        "unlockTips": "PoolUnlockTips_538",
                        "unlockType": 15,
                        "unlockParaInt": 0,
                        "unlockParaStr": "672995"
                    },
                    {
                        "goodsId": 718779,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.VERSION_TYPE,
                        "endTime": 2051207999,
                        "showType": Goods_ShowType.LOCK_SHOW,
                        "unlockTips": "PoolUnlockTips_549",
                        "unlockType": 15,
                        "unlockParaInt": 0,
                        "unlockParaStr": "672996"
                    }
                ],
                "nextAutoRefreshTime": 1678046400,
                "manualRefreshTimes": 0,
                "refreshItem": 0,
                "nextRefreshCost": 4294967295,
                "maxManualRefreshTimes": 0,
                "shopType": 31,
                "currencyList": [
                    119715
                ],
                "scheduleChangeTime": 2051208000,
                "shopName": "\u8089\u9e3d\u5546\u5e97",
                "unlockLevel": 50,
                "beginTime": 1640980800,
                "endTime": 2051207999,
                "isHot": false,
                "multiCurrency": 0,
                "isDoubleConfirm": false,
                "isShow": true,
                "sortPriority": 49,
                "toolbarCurrencyList": [
                    1,
                    2,
                    3
                ],
                "newCurrencyList": [
                    119715
                ],
                "freeManualRefreshTimes": 0
            },
            {
                "shopId": 55,
                "isOpen": true,
                "textMapName": "ShopName55",
                "shopIconPath": "SpriteOutput\\ShopTabIcons\\IconShopEvent",
                "goodsList": [
                    {
                        "goodsId": 35716,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.WEEK_TYPE,
                        "endTime": 2073239999
                    },
                    {
                        "goodsId": 35717,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.WEEK_TYPE,
                        "endTime": 2073239999
                    },
                    {
                        "goodsId": 35718,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.WEEK_TYPE,
                        "endTime": 2073239999
                    },
                    {
                        "goodsId": 35749,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.WEEK_TYPE,
                        "endTime": 2073239999
                    },
                    {
                        "goodsId": 35750,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.WEEK_TYPE,
                        "endTime": 2073239999
                    },
                    {
                        "goodsId": 35745,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.WEEK_TYPE,
                        "endTime": 2073239999
                    },
                    {
                        "goodsId": 35724,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 2073239999
                    },
                    {
                        "goodsId": 35725,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 2073239999
                    },
                    {
                        "goodsId": 35730,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 2073239999,
                        "showType": Goods_ShowType.LOCK_SHOW,
                        "unlockTips": "PoolUnlockTips_355",
                        "unlockType": 15,
                        "unlockParaInt": 0,
                        "unlockParaStr": "651059"
                    },
                    {
                        "goodsId": 35729,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 2073239999
                    },
                    {
                        "goodsId": 35732,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 2073239999
                    },
                    {
                        "goodsId": 35754,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 2073239999
                    },
                    {
                        "goodsId": 35741,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 2073239999
                    },
                    {
                        "goodsId": 35743,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 2073239999
                    },
                    {
                        "goodsId": 35742,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 2073239999
                    },
                    {
                        "goodsId": 35744,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 2073239999
                    },
                    {
                        "goodsId": 35746,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 2073239999
                    },
                    {
                        "goodsId": 35747,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 2073239999
                    },
                    {
                        "goodsId": 35751,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 2073239999
                    },
                    {
                        "goodsId": 35748,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 2073239999
                    },
                    {
                        "goodsId": 35752,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 2073239999
                    },
                    {
                        "goodsId": 35753,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 2073239999
                    }
                ],
                "nextAutoRefreshTime": 1678046400,
                "manualRefreshTimes": 0,
                "refreshItem": 0,
                "nextRefreshCost": 4294967295,
                "maxManualRefreshTimes": 0,
                "shopType": 33,
                "currencyList": [
                    827
                ],
                "scheduleChangeTime": 2073240000,
                "shopName": "DLC\u5546\u5e97",
                "unlockLevel": 25,
                "beginTime": 1632981600,
                "endTime": 2073239999,
                "isHot": false,
                "multiCurrency": 1,
                "isDoubleConfirm": false,
                "isShow": false,
                "sortPriority": 10,
                "toolbarCurrencyList": [
                    1,
                    2,
                    3
                ],
                "newCurrencyList": [
                    827
                ],
                "freeManualRefreshTimes": 0
            },
            {
                "shopId": 57,
                "isOpen": true,
                "textMapName": "ExScheduleTextmap_ShopName57",
                "shopIconPath": "SpriteOutput\\ShopTabIcons\\IconShopEvent",
                "goodsList": [
                    {
                        "goodsId": 718763,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 1684094399,
                        "showType": Goods_ShowType.LOCK_SHOW,
                        "unlockTips": "PoolUnlockTips_78",
                        "unlockType": 15,
                        "unlockParaInt": 0,
                        "unlockParaStr": "132007"
                    },
                    {
                        "goodsId": 718728,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 1684094399,
                        "showType": Goods_ShowType.LOCK_SHOW,
                        "unlockTips": "PoolUnlockTips_78",
                        "unlockType": 15,
                        "unlockParaInt": 0,
                        "unlockParaStr": "132007"
                    },
                    {
                        "goodsId": 718764,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 1684094399
                    },
                    {
                        "goodsId": 718747,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 1684094399
                    },
                    {
                        "goodsId": 718729,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 1684094399
                    },
                    {
                        "goodsId": 718765,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 1684094399
                    },
                    {
                        "goodsId": 718766,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 1684094399
                    },
                    {
                        "goodsId": 718767,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 1684094399
                    },
                    {
                        "goodsId": 718748,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 1684094399
                    },
                    {
                        "goodsId": 718749,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 1684094399
                    },
                    {
                        "goodsId": 718750,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 1684094399
                    },
                    {
                        "goodsId": 718730,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 1684094399
                    },
                    {
                        "goodsId": 718731,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 1684094399
                    },
                    {
                        "goodsId": 718732,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 1684094399
                    },
                    {
                        "goodsId": 718768,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 1684094399,
                        "showType": Goods_ShowType.LOCK_SHOW,
                        "unlockTips": "PoolUnlockTips_78",
                        "unlockType": 15,
                        "unlockParaInt": 0,
                        "unlockParaStr": "132007"
                    },
                    {
                        "goodsId": 718751,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 1684094399,
                        "showType": Goods_ShowType.LOCK_SHOW,
                        "unlockTips": "PoolUnlockTips_78",
                        "unlockType": 15,
                        "unlockParaInt": 0,
                        "unlockParaStr": "132007"
                    },
                    {
                        "goodsId": 718733,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 1684094399,
                        "showType": Goods_ShowType.LOCK_SHOW,
                        "unlockTips": "PoolUnlockTips_78",
                        "unlockType": 15,
                        "unlockParaInt": 0,
                        "unlockParaStr": "132007"
                    },
                    {
                        "goodsId": 718734,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 1684094399
                    }
                ],
                "nextAutoRefreshTime": 1678046400,
                "manualRefreshTimes": 0,
                "refreshItem": 0,
                "nextRefreshCost": 4294967295,
                "maxManualRefreshTimes": 0,
                "shopType": 34,
                "currencyList": [
                    985
                ],
                "scheduleChangeTime": 1681070400,
                "shopName": "\u7cbe\u82f1\u5de5\u574a",
                "unlockLevel": 20,
                "beginTime": 1676836800,
                "endTime": 1681070399,
                "isHot": false,
                "multiCurrency": 0,
                "isDoubleConfirm": false,
                "isShow": true,
                "sortPriority": 53,
                "toolbarCurrencyList": [
                    1,
                    2,
                    3
                ],
                "newCurrencyList": [
                    985
                ],
                "freeManualRefreshTimes": 0
            },
            {
                "shopId": 58,
                "isOpen": true,
                "textMapName": "ShopName58",
                "shopIconPath": "SpriteOutput\\ShopTabIcons\\IconShopEvent",
                "goodsList": [
                    {
                        "goodsId": 718769,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 1681070399
                    },
                    {
                        "goodsId": 718770,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 1681070399
                    },
                    {
                        "goodsId": 718771,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 1681070399
                    },
                    {
                        "goodsId": 718772,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 1681070399
                    },
                    {
                        "goodsId": 718773,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 1681070399
                    },
                    {
                        "goodsId": 718774,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 1681070399
                    },
                    {
                        "goodsId": 718775,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 1681070399
                    },
                    {
                        "goodsId": 718776,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 1681070399
                    },
                    {
                        "goodsId": 718777,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 1681070399
                    },
                    {
                        "goodsId": 718778,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 1681070399
                    }
                ],
                "nextAutoRefreshTime": 1678046400,
                "manualRefreshTimes": 0,
                "refreshItem": 0,
                "nextRefreshCost": 4294967295,
                "maxManualRefreshTimes": 0,
                "shopType": 35,
                "currencyList": [
                    983
                ],
                "scheduleChangeTime": 1681070400,
                "shopName": "\u4f5c\u6218\u519b\u5907",
                "unlockLevel": 20,
                "beginTime": 1676836800,
                "endTime": 1681070399,
                "isHot": false,
                "multiCurrency": 0,
                "isDoubleConfirm": false,
                "isShow": true,
                "sortPriority": 51,
                "toolbarCurrencyList": [
                    1,
                    2,
                    3
                ],
                "newCurrencyList": [
                    983
                ],
                "freeManualRefreshTimes": 0
            },
            {
                "shopId": 61,
                "isOpen": true,
                "textMapName": "ShopName61",
                "shopIconPath": "SpriteOutput\\ShopTabIcons\\IconShopEvent",
                "goodsList": [
                    {
                        "goodsId": 36001,
                        "buyTimes": 1,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 36002,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 2051207999,
                        "showType": Goods_ShowType.LOCK_SHOW,
                        "unlockTips": "PoolUnlockTips_453",
                        "unlockType": 15,
                        "unlockParaInt": 0,
                        "unlockParaStr": "672011"
                    },
                    {
                        "goodsId": 36003,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 2051207999,
                        "showType": Goods_ShowType.LOCK_SHOW,
                        "unlockTips": "PoolUnlockTips_454",
                        "unlockType": 15,
                        "unlockParaInt": 0,
                        "unlockParaStr": "672012"
                    },
                    {
                        "goodsId": 36004,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 2051207999,
                        "showType": Goods_ShowType.LOCK_SHOW,
                        "unlockTips": "PoolUnlockTips_455",
                        "unlockType": 15,
                        "unlockParaInt": 0,
                        "unlockParaStr": "672013"
                    },
                    {
                        "goodsId": 36005,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 2051207999,
                        "showType": Goods_ShowType.LOCK_SHOW,
                        "unlockTips": "PoolUnlockTips_456",
                        "unlockType": 15,
                        "unlockParaInt": 0,
                        "unlockParaStr": "672014"
                    },
                    {
                        "goodsId": 36006,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 2051207999,
                        "showType": Goods_ShowType.LOCK_SHOW,
                        "unlockTips": "PoolUnlockTips_457",
                        "unlockType": 15,
                        "unlockParaInt": 0,
                        "unlockParaStr": "672015"
                    },
                    {
                        "goodsId": 35931,
                        "buyTimes": 1,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 35932,
                        "buyTimes": 1,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 35933,
                        "buyTimes": 1,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 35934,
                        "buyTimes": 1,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 35935,
                        "buyTimes": 1,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 35936,
                        "buyTimes": 1,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 35937,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.WEEK_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 35938,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.WEEK_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 35939,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.WEEK_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 35940,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.WEEK_TYPE,
                        "endTime": 2051207999,
                        "showType": Goods_ShowType.LOCK_SHOW,
                        "unlockTips": "PoolUnlockTips_442",
                        "unlockType": 15,
                        "unlockParaInt": 0,
                        "unlockParaStr": "671346"
                    },
                    {
                        "goodsId": 35941,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.WEEK_TYPE,
                        "endTime": 2051207999,
                        "showType": Goods_ShowType.LOCK_SHOW,
                        "unlockTips": "PoolUnlockTips_443",
                        "unlockType": 15,
                        "unlockParaInt": 0,
                        "unlockParaStr": "671347"
                    },
                    {
                        "goodsId": 35942,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.WEEK_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 35943,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.WEEK_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 35944,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.WEEK_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 35945,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.WEEK_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 35946,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.WEEK_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 649942,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.DAY_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 649943,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.DAY_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 649944,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.DAY_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 649945,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.DAY_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 649946,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.DAY_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 649947,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.DAY_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 649948,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.DAY_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 649949,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.DAY_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 649950,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.DAY_TYPE,
                        "endTime": 2051207999
                    },
                    {
                        "goodsId": 649951,
                        "buyTimes": 0,
                        "canBeRefresh": true,
                        "refreshTimeType": Goods_RefreshTimeType.DAY_TYPE,
                        "endTime": 2051207999
                    }
                ],
                "nextAutoRefreshTime": 1678046400,
                "manualRefreshTimes": 0,
                "refreshItem": 0,
                "nextRefreshCost": 4294967295,
                "maxManualRefreshTimes": 0,
                "shopType": 39,
                "currencyList": [
                    123002
                ],
                "scheduleChangeTime": 2051208000,
                "shopName": "\u6d3b\u52a8\u5546\u5e97",
                "unlockLevel": 30,
                "beginTime": 1652918400,
                "endTime": 2051207999,
                "isHot": false,
                "multiCurrency": 1,
                "isDoubleConfirm": false,
                "isShow": true,
                "sortPriority": 6,
                "toolbarCurrencyList": [
                    1,
                    2,
                    3
                ],
                "newCurrencyList": [
                    123002
                ],
                "freeManualRefreshTimes": 0
            },
            {
                "shopId": 51,
                "isOpen": true,
                "textMapName": "ShopName307",
                "shopIconPath": "SpriteOutput\\ShopTabIcons\\IconShopEvent",
                "goodsList": [
                    {
                        "goodsId": 36400,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 1681329599,
                        "showType": Goods_ShowType.LOCK_SHOW,
                        "unlockTips": "PoolUnlockTips_554",
                        "unlockType": 15,
                        "unlockParaInt": 0,
                        "unlockParaStr": "676393"
                    },
                    {
                        "goodsId": 36401,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 1681329599,
                        "showType": Goods_ShowType.LOCK_SHOW,
                        "unlockTips": "PoolUnlockTips_544",
                        "unlockType": 15,
                        "unlockParaInt": 0,
                        "unlockParaStr": "676200"
                    },
                    {
                        "goodsId": 36402,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 1681329599
                    },
                    {
                        "goodsId": 36403,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 1681329599,
                        "showType": Goods_ShowType.LOCK_SHOW,
                        "unlockTips": "PoolUnlockTips_552",
                        "unlockType": 15,
                        "unlockParaInt": 0,
                        "unlockParaStr": "676391"
                    },
                    {
                        "goodsId": 36404,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 1681329599,
                        "showType": Goods_ShowType.LOCK_SHOW,
                        "unlockTips": "PoolUnlockTips_545",
                        "unlockType": 15,
                        "unlockParaInt": 0,
                        "unlockParaStr": "676201"
                    },
                    {
                        "goodsId": 36405,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 1681329599,
                        "showType": Goods_ShowType.LOCK_SHOW,
                        "unlockTips": "PoolUnlockTips_553",
                        "unlockType": 15,
                        "unlockParaInt": 0,
                        "unlockParaStr": "676392"
                    },
                    {
                        "goodsId": 36406,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 1681329599,
                        "showType": Goods_ShowType.LOCK_SHOW,
                        "unlockTips": "PoolUnlockTips_546",
                        "unlockType": 15,
                        "unlockParaInt": 0,
                        "unlockParaStr": "676202"
                    },
                    {
                        "goodsId": 36407,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 1681329599,
                        "showType": Goods_ShowType.LOCK_SHOW,
                        "unlockTips": "PoolUnlockTips_547",
                        "unlockType": 15,
                        "unlockParaInt": 0,
                        "unlockParaStr": "676203"
                    },
                    {
                        "goodsId": 36408,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 1681329599
                    },
                    {
                        "goodsId": 36409,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 1681329599
                    },
                    {
                        "goodsId": 36410,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 1681329599
                    },
                    {
                        "goodsId": 36411,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 1681329599
                    },
                    {
                        "goodsId": 36412,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 1681329599
                    },
                    {
                        "goodsId": 36413,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 1681329599
                    },
                    {
                        "goodsId": 36414,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 1681329599
                    },
                    {
                        "goodsId": 36415,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 1681329599
                    },
                    {
                        "goodsId": 36416,
                        "buyTimes": 0,
                        "canBeRefresh": false,
                        "refreshTimeType": Goods_RefreshTimeType.SHOP_TYPE,
                        "endTime": 1681329599
                    }
                ],
                "nextAutoRefreshTime": 1678046400,
                "manualRefreshTimes": 0,
                "refreshItem": 0,
                "nextRefreshCost": 4294967295,
                "maxManualRefreshTimes": 0,
                "shopType": 307,
                "currencyList": [
                    126001
                ],
                "scheduleChangeTime": 1681329600,
                "shopName": "\u6d3b\u52a8\u5546\u5e97",
                "unlockLevel": 30,
                "beginTime": 1676491200,
                "endTime": 1681329599,
                "isHot": false,
                "multiCurrency": 1,
                "isDoubleConfirm": false,
                "isShow": true,
                "sortPriority": 6,
                "toolbarCurrencyList": [
                    1,
                    2,
                    3
                ],
                "newCurrencyList": [
                    126001
                ],
                "freeManualRefreshTimes": 0
            }
        ],
        "isAll": true
    } as GetShopListRsp)
}