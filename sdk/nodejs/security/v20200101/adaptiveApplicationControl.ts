// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export class AdaptiveApplicationControl extends pulumi.CustomResource {
    /**
     * Get an existing AdaptiveApplicationControl resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): AdaptiveApplicationControl {
        return new AdaptiveApplicationControl(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-nextgen:security/v20200101:AdaptiveApplicationControl';

    /**
     * Returns true if the given object is an instance of AdaptiveApplicationControl.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AdaptiveApplicationControl {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AdaptiveApplicationControl.__pulumiType;
    }

    /**
     * The configuration status of the machines group or machine or rule
     */
    public /*out*/ readonly configurationStatus!: pulumi.Output<string>;
    /**
     * The application control policy enforcement/protection mode of the machine group
     */
    public readonly enforcementMode!: pulumi.Output<string | undefined>;
    public /*out*/ readonly issues!: pulumi.Output<outputs.security.v20200101.AdaptiveApplicationControlIssueSummaryResponse[]>;
    /**
     * Location where the resource is stored
     */
    public /*out*/ readonly location!: pulumi.Output<string>;
    /**
     * Resource name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    public readonly pathRecommendations!: pulumi.Output<outputs.security.v20200101.PathRecommendationResponse[] | undefined>;
    /**
     * The protection mode of the collection/file types. Exe/Msi/Script are used for Windows, Executable is used for Linux.
     */
    public readonly protectionMode!: pulumi.Output<outputs.security.v20200101.ProtectionModeResponse | undefined>;
    /**
     * The initial recommendation status of the machine group or machine
     */
    public /*out*/ readonly recommendationStatus!: pulumi.Output<string>;
    /**
     * The source type of the machine group
     */
    public /*out*/ readonly sourceSystem!: pulumi.Output<string>;
    /**
     * Resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    public readonly vmRecommendations!: pulumi.Output<outputs.security.v20200101.VmRecommendationResponse[] | undefined>;

    /**
     * Create a AdaptiveApplicationControl resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AdaptiveApplicationControlArgs, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (!(opts && opts.id)) {
            if ((!args || args.ascLocation === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'ascLocation'");
            }
            if ((!args || args.groupName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'groupName'");
            }
            inputs["ascLocation"] = args ? args.ascLocation : undefined;
            inputs["enforcementMode"] = args ? args.enforcementMode : undefined;
            inputs["groupName"] = args ? args.groupName : undefined;
            inputs["pathRecommendations"] = args ? args.pathRecommendations : undefined;
            inputs["protectionMode"] = args ? args.protectionMode : undefined;
            inputs["vmRecommendations"] = args ? args.vmRecommendations : undefined;
            inputs["configurationStatus"] = undefined /*out*/;
            inputs["issues"] = undefined /*out*/;
            inputs["location"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["recommendationStatus"] = undefined /*out*/;
            inputs["sourceSystem"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        } else {
            inputs["configurationStatus"] = undefined /*out*/;
            inputs["enforcementMode"] = undefined /*out*/;
            inputs["issues"] = undefined /*out*/;
            inputs["location"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["pathRecommendations"] = undefined /*out*/;
            inputs["protectionMode"] = undefined /*out*/;
            inputs["recommendationStatus"] = undefined /*out*/;
            inputs["sourceSystem"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
            inputs["vmRecommendations"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        const aliasOpts = { aliases: [{ type: "azure-nextgen:security/latest:AdaptiveApplicationControl" }, { type: "azure-nextgen:security/v20150601preview:AdaptiveApplicationControl" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(AdaptiveApplicationControl.__pulumiType, name, inputs, opts);
    }
}

/**
 * The set of arguments for constructing a AdaptiveApplicationControl resource.
 */
export interface AdaptiveApplicationControlArgs {
    /**
     * The location where ASC stores the data of the subscription. can be retrieved from Get locations
     */
    readonly ascLocation: pulumi.Input<string>;
    /**
     * The application control policy enforcement/protection mode of the machine group
     */
    readonly enforcementMode?: pulumi.Input<string>;
    /**
     * Name of an application control machine group
     */
    readonly groupName: pulumi.Input<string>;
    readonly pathRecommendations?: pulumi.Input<pulumi.Input<inputs.security.v20200101.PathRecommendation>[]>;
    /**
     * The protection mode of the collection/file types. Exe/Msi/Script are used for Windows, Executable is used for Linux.
     */
    readonly protectionMode?: pulumi.Input<inputs.security.v20200101.ProtectionMode>;
    readonly vmRecommendations?: pulumi.Input<pulumi.Input<inputs.security.v20200101.VmRecommendation>[]>;
}
