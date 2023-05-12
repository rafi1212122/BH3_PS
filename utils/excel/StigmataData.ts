import StigmataExcelTable from "../../resources/ExcelOutputAsset/StigmataData.json";

export default class StigmataData {
	private constructor() {}

	public static fromId(id: number) {
		return (StigmataExcelTable as StigmataExcelTable).find((e) => e.ID === id);
	}

	public static all() {
		return StigmataExcelTable as StigmataExcelTable;
	}
}

type StigmataExcelTable = {
    rarity: number
    maxRarity: number
    subRarity: number
    subMaxRarity: number
    cost: number
    powerType: number
    maxLv: number
    expType: number
    sellPriceBase: number
    sellPriceAdd: number
    gearExpProvideBase: number
    gearExpPorvideAdd: number
    baseType: number
    LabelPath: string
    displayTitle: {
        hash: number
    }
    displayDescription: {
        hash: number
    }
    displayNumber: number
    iconPath: string
    imagePath: string
    HPBase: number
    HPAdd: number
    SPBase: number
    SPAdd: number
    attackBase: number
    attackAdd: number
    defenceBase: number
    defenceAdd: number
    criticalBase: number
    criticalAdd: number
    durabilityMax: number
    evoMaterial: {
        ID: number
        Num: number
    }[]
    evoID: number
    prop1ID: number
    prop1Param1: number
    prop1Param2: number
    prop1Param3: number
    prop1Param1Add: number
    prop1Param2Add: number
    prop1Param3Add: number
    prop2ID: number
    prop2Param1: number
    prop2Param2: number
    prop2Param3: number
    prop2Param1Add: number
    prop2Param2Add: number
    prop2Param3Add: number
    prop3ID: number
    prop3Param1: number
    prop3Param2: number
    prop3Param3: number
    prop3Param1Add: number
    prop3Param2Add: number
    prop3Param3Add: number
    protect: boolean
    setID: number
    smallIcon: string
    tattooPath: string
    offsetX: number
    offsetY: number
    scale: number
    affixTreeId: number
    canRefine: boolean
    recycleID: number
    disjoinScoinCost: number
    disjoinAddMaterial: {
        ID: number
        Num: number
    }[]
    LinkIDList: number[]
    quality: number
    stigmataMainID: number
    ShortName: {
        hash: number
    }
    SellPriceID: number
    Transcendent: boolean
    Target: number
    isSecurityProtect: boolean
    GachaMainDropDisplayConfig: number[]
    GachaGiftDropDisplayConfig: any[]
    StigmataFilterList: number[]
    CollaborationSetID: number
    DataImpl: {}
    ID: number
}[]