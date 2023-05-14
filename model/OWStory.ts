import { DocumentType, ModelOptions, Prop, Severity, getModelForClass } from "@typegoose/typegoose";

@ModelOptions({ schemaOptions: { timestamps: true, collection: "ow_stories" }, options: { customName: "OWStory" } })
export class OWStory {
    @Prop({ required: true })
    storyId!: number;

    @Prop({ required: true })
    storyProgress?: number;

    @Prop({ default: false })
    isFinished!: boolean;

    public finish(this: DocumentType<OWStory>) {
        this.$set('isFinished', true)

        return this
    }
}

export default getModelForClass(OWStory)