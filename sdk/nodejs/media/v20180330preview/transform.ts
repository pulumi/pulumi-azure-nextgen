// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

/**
 * A Transform encapsulates the rules or instructions for generating desired outputs from input media, such as by transcoding or by extracting insights. After the Transform is created, it can be applied to input media by creating Jobs.
 */
export class Transform extends pulumi.CustomResource {
    /**
     * Get an existing Transform resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Transform {
        return new Transform(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-nextgen:media/v20180330preview:Transform';

    /**
     * Returns true if the given object is an instance of Transform.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Transform {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Transform.__pulumiType;
    }

    /**
     * The UTC date and time when the Transform was created, in 'YYYY-MM-DDThh:mm:ssZ' format.
     */
    public /*out*/ readonly created!: pulumi.Output<string>;
    /**
     * An optional verbose description of the Transform.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The UTC date and time when the Transform was last updated, in 'YYYY-MM-DDThh:mm:ssZ' format.
     */
    public /*out*/ readonly lastModified!: pulumi.Output<string>;
    /**
     * The name of the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * An array of one or more TransformOutputs that the Transform should generate.
     */
    public readonly outputs!: pulumi.Output<outputs.media.v20180330preview.TransformOutputResponse[]>;
    /**
     * The type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Transform resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TransformArgs, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (!(opts && opts.id)) {
            if ((!args || args.accountName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'accountName'");
            }
            if ((!args || args.outputs === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'outputs'");
            }
            if ((!args || args.resourceGroupName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.transformName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'transformName'");
            }
            inputs["accountName"] = args ? args.accountName : undefined;
            inputs["description"] = args ? args.description : undefined;
            inputs["outputs"] = args ? args.outputs : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["transformName"] = args ? args.transformName : undefined;
            inputs["created"] = undefined /*out*/;
            inputs["lastModified"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        } else {
            inputs["created"] = undefined /*out*/;
            inputs["description"] = undefined /*out*/;
            inputs["lastModified"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["outputs"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        const aliasOpts = { aliases: [{ type: "azure-nextgen:media/latest:Transform" }, { type: "azure-nextgen:media/v20180601preview:Transform" }, { type: "azure-nextgen:media/v20180701:Transform" }, { type: "azure-nextgen:media/v20200501:Transform" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(Transform.__pulumiType, name, inputs, opts);
    }
}

/**
 * The set of arguments for constructing a Transform resource.
 */
export interface TransformArgs {
    /**
     * The Media Services account name.
     */
    readonly accountName: pulumi.Input<string>;
    /**
     * An optional verbose description of the Transform.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * An array of one or more TransformOutputs that the Transform should generate.
     */
    readonly outputs: pulumi.Input<pulumi.Input<inputs.media.v20180330preview.TransformOutput>[]>;
    /**
     * The name of the resource group within the Azure subscription.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The Transform name.
     */
    readonly transformName: pulumi.Input<string>;
}
