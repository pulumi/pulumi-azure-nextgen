// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

/**
 * Policy Contract details.
 */
export class ApiPolicy extends pulumi.CustomResource {
    /**
     * Get an existing ApiPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ApiPolicy {
        return new ApiPolicy(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-nextgen:apimanagement/v20191201preview:ApiPolicy';

    /**
     * Returns true if the given object is an instance of ApiPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ApiPolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ApiPolicy.__pulumiType;
    }

    /**
     * Format of the policyContent.
     */
    public readonly format!: pulumi.Output<string | undefined>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Resource type for API Management resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Contents of the Policy as defined by the format.
     */
    public readonly value!: pulumi.Output<string>;

    /**
     * Create a ApiPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ApiPolicyArgs, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (!(opts && opts.id)) {
            if ((!args || args.apiId === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'apiId'");
            }
            if ((!args || args.policyId === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'policyId'");
            }
            if ((!args || args.resourceGroupName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serviceName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'serviceName'");
            }
            if ((!args || args.value === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'value'");
            }
            inputs["apiId"] = args ? args.apiId : undefined;
            inputs["format"] = args ? args.format : undefined;
            inputs["policyId"] = args ? args.policyId : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["serviceName"] = args ? args.serviceName : undefined;
            inputs["value"] = args ? args.value : undefined;
            inputs["name"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        } else {
            inputs["format"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
            inputs["value"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        const aliasOpts = { aliases: [{ type: "azure-nextgen:apimanagement/latest:ApiPolicy" }, { type: "azure-nextgen:apimanagement/v20170301:ApiPolicy" }, { type: "azure-nextgen:apimanagement/v20180101:ApiPolicy" }, { type: "azure-nextgen:apimanagement/v20180601preview:ApiPolicy" }, { type: "azure-nextgen:apimanagement/v20190101:ApiPolicy" }, { type: "azure-nextgen:apimanagement/v20191201:ApiPolicy" }, { type: "azure-nextgen:apimanagement/v20200601preview:ApiPolicy" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(ApiPolicy.__pulumiType, name, inputs, opts);
    }
}

/**
 * The set of arguments for constructing a ApiPolicy resource.
 */
export interface ApiPolicyArgs {
    /**
     * API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
     */
    readonly apiId: pulumi.Input<string>;
    /**
     * Format of the policyContent.
     */
    readonly format?: pulumi.Input<string | enums.apimanagement.v20191201preview.PolicyContentFormat>;
    /**
     * The identifier of the Policy.
     */
    readonly policyId: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the API Management service.
     */
    readonly serviceName: pulumi.Input<string>;
    /**
     * Contents of the Policy as defined by the format.
     */
    readonly value: pulumi.Input<string>;
}
