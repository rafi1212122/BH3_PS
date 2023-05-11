import { ModelOptions, Prop, ReturnModelType, getModelForClass } from "@typegoose/typegoose";

@ModelOptions({ schemaOptions: { timestamps: true, collection: "auto_increment" }, options: { customName: "AutoIncrement" } })
export class AutoIncrement {
    @Prop({ required: true, unique: true })
    public consumer!: string

    @Prop({ required: true })
    public lastId!: number

    public static async getNextId(this: ReturnModelType<typeof AutoIncrement>, consumer: string) {
        const ai = await this.findOneAndUpdate({ consumer }, { 
            $setOnInsert: {
                consumer,
                lastId: 100
            }
        }, { returnDocument: 'after', upsert: true })

        await ai.$inc('lastId', 1).save()

        if(!ai) throw "How is this even possible!"
        return ai.lastId
    }
}

export default getModelForClass(AutoIncrement)