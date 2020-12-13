// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

/**
 * Machine Learning compute object wrapped into ARM resource envelope.
 */
export class MachineLearningCompute extends pulumi.CustomResource {
    /**
     * Get an existing MachineLearningCompute resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): MachineLearningCompute {
        return new MachineLearningCompute(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-nextgen:machinelearningservices/v20200218preview:MachineLearningCompute';

    /**
     * Returns true if the given object is an instance of MachineLearningCompute.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MachineLearningCompute {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MachineLearningCompute.__pulumiType;
    }

    /**
     * The identity of the resource.
     */
    public readonly identity!: pulumi.Output<outputs.machinelearningservices.v20200218preview.IdentityResponse | undefined>;
    /**
     * Specifies the location of the resource.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * Specifies the name of the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Compute properties
     */
    public readonly properties!: pulumi.Output<outputs.machinelearningservices.v20200218preview.AKSResponse | outputs.machinelearningservices.v20200218preview.AmlComputeResponse | outputs.machinelearningservices.v20200218preview.ComputeInstanceResponse | outputs.machinelearningservices.v20200218preview.DataFactoryResponse | outputs.machinelearningservices.v20200218preview.DataLakeAnalyticsResponse | outputs.machinelearningservices.v20200218preview.DatabricksResponse | outputs.machinelearningservices.v20200218preview.HDInsightResponse | outputs.machinelearningservices.v20200218preview.VirtualMachineResponse>;
    /**
     * The sku of the workspace.
     */
    public readonly sku!: pulumi.Output<outputs.machinelearningservices.v20200218preview.SkuResponse | undefined>;
    /**
     * Contains resource tags defined as key/value pairs.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Specifies the type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a MachineLearningCompute resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MachineLearningComputeArgs, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (!(opts && opts.id)) {
            if ((!args || args.computeName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'computeName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.workspaceName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'workspaceName'");
            }
            inputs["computeName"] = args ? args.computeName : undefined;
            inputs["identity"] = args ? args.identity : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["properties"] = args ? args.properties : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["sku"] = args ? args.sku : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["workspaceName"] = args ? args.workspaceName : undefined;
            inputs["name"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        } else {
            inputs["identity"] = undefined /*out*/;
            inputs["location"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["properties"] = undefined /*out*/;
            inputs["sku"] = undefined /*out*/;
            inputs["tags"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        const aliasOpts = { aliases: [{ type: "azure-nextgen:machinelearningservices/latest:MachineLearningCompute" }, { type: "azure-nextgen:machinelearningservices/v20180301preview:MachineLearningCompute" }, { type: "azure-nextgen:machinelearningservices/v20181119:MachineLearningCompute" }, { type: "azure-nextgen:machinelearningservices/v20190501:MachineLearningCompute" }, { type: "azure-nextgen:machinelearningservices/v20190601:MachineLearningCompute" }, { type: "azure-nextgen:machinelearningservices/v20191101:MachineLearningCompute" }, { type: "azure-nextgen:machinelearningservices/v20200101:MachineLearningCompute" }, { type: "azure-nextgen:machinelearningservices/v20200301:MachineLearningCompute" }, { type: "azure-nextgen:machinelearningservices/v20200401:MachineLearningCompute" }, { type: "azure-nextgen:machinelearningservices/v20200501preview:MachineLearningCompute" }, { type: "azure-nextgen:machinelearningservices/v20200515preview:MachineLearningCompute" }, { type: "azure-nextgen:machinelearningservices/v20200601:MachineLearningCompute" }, { type: "azure-nextgen:machinelearningservices/v20200801:MachineLearningCompute" }, { type: "azure-nextgen:machinelearningservices/v20200901preview:MachineLearningCompute" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(MachineLearningCompute.__pulumiType, name, inputs, opts);
    }
}

/**
 * The set of arguments for constructing a MachineLearningCompute resource.
 */
export interface MachineLearningComputeArgs {
    /**
     * Name of the Azure Machine Learning compute.
     */
    readonly computeName: pulumi.Input<string>;
    /**
     * The identity of the resource.
     */
    readonly identity?: pulumi.Input<inputs.machinelearningservices.v20200218preview.Identity>;
    /**
     * Specifies the location of the resource.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * Compute properties
     */
    readonly properties?: pulumi.Input<inputs.machinelearningservices.v20200218preview.AKS | inputs.machinelearningservices.v20200218preview.AmlCompute | inputs.machinelearningservices.v20200218preview.ComputeInstance | inputs.machinelearningservices.v20200218preview.DataFactory | inputs.machinelearningservices.v20200218preview.DataLakeAnalytics | inputs.machinelearningservices.v20200218preview.Databricks | inputs.machinelearningservices.v20200218preview.HDInsight | inputs.machinelearningservices.v20200218preview.VirtualMachine>;
    /**
     * Name of the resource group in which workspace is located.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The sku of the workspace.
     */
    readonly sku?: pulumi.Input<inputs.machinelearningservices.v20200218preview.Sku>;
    /**
     * Contains resource tags defined as key/value pairs.
     */
    readonly tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Name of Azure Machine Learning workspace.
     */
    readonly workspaceName: pulumi.Input<string>;
}
