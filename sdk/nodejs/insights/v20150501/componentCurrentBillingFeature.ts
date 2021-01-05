// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

/**
 * An Application Insights component billing features
 */
export class ComponentCurrentBillingFeature extends pulumi.CustomResource {
    /**
     * Get an existing ComponentCurrentBillingFeature resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ComponentCurrentBillingFeature {
        return new ComponentCurrentBillingFeature(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-nextgen:insights/v20150501:ComponentCurrentBillingFeature';

    /**
     * Returns true if the given object is an instance of ComponentCurrentBillingFeature.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ComponentCurrentBillingFeature {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ComponentCurrentBillingFeature.__pulumiType;
    }

    /**
     * Current enabled pricing plan. When the component is in the Enterprise plan, this will list both 'Basic' and 'Application Insights Enterprise'.
     */
    public readonly currentBillingFeatures!: pulumi.Output<string[] | undefined>;
    /**
     * An Application Insights component daily data volume cap
     */
    public readonly dataVolumeCap!: pulumi.Output<outputs.insights.v20150501.ApplicationInsightsComponentDataVolumeCapResponse | undefined>;

    /**
     * Create a ComponentCurrentBillingFeature resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ComponentCurrentBillingFeatureArgs, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (!(opts && opts.id)) {
            if ((!args || args.resourceGroupName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.resourceName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'resourceName'");
            }
            inputs["currentBillingFeatures"] = args ? args.currentBillingFeatures : undefined;
            inputs["dataVolumeCap"] = args ? args.dataVolumeCap : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["resourceName"] = args ? args.resourceName : undefined;
        } else {
            inputs["currentBillingFeatures"] = undefined /*out*/;
            inputs["dataVolumeCap"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        const aliasOpts = { aliases: [{ type: "azure-nextgen:insights/latest:ComponentCurrentBillingFeature" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(ComponentCurrentBillingFeature.__pulumiType, name, inputs, opts);
    }
}

/**
 * The set of arguments for constructing a ComponentCurrentBillingFeature resource.
 */
export interface ComponentCurrentBillingFeatureArgs {
    /**
     * Current enabled pricing plan. When the component is in the Enterprise plan, this will list both 'Basic' and 'Application Insights Enterprise'.
     */
    readonly currentBillingFeatures?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * An Application Insights component daily data volume cap
     */
    readonly dataVolumeCap?: pulumi.Input<inputs.insights.v20150501.ApplicationInsightsComponentDataVolumeCap>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Application Insights component resource.
     */
    readonly resourceName: pulumi.Input<string>;
}