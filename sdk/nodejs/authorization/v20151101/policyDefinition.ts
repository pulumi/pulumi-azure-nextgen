// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

/**
 * Policy definition.
 */
export class PolicyDefinition extends pulumi.CustomResource {
    /**
     * Get an existing PolicyDefinition resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): PolicyDefinition {
        return new PolicyDefinition(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-nextgen:authorization/v20151101:PolicyDefinition';

    /**
     * Returns true if the given object is an instance of PolicyDefinition.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PolicyDefinition {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PolicyDefinition.__pulumiType;
    }

    /**
     * Gets or sets the policy definition name.
     */
    public readonly name!: pulumi.Output<string | undefined>;
    /**
     * Gets or sets the policy definition properties.
     */
    public readonly properties!: pulumi.Output<outputs.authorization.v20151101.PolicyDefinitionPropertiesResponse>;

    /**
     * Create a PolicyDefinition resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PolicyDefinitionArgs, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (!(opts && opts.id)) {
            if ((!args || args.policyDefinitionName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'policyDefinitionName'");
            }
            inputs["name"] = args ? args.name : undefined;
            inputs["policyDefinitionName"] = args ? args.policyDefinitionName : undefined;
            inputs["properties"] = args ? args.properties : undefined;
        } else {
            inputs["name"] = undefined /*out*/;
            inputs["properties"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        const aliasOpts = { aliases: [{ type: "azure-nextgen:authorization/latest:PolicyDefinition" }, { type: "azure-nextgen:authorization/v20151001preview:PolicyDefinition" }, { type: "azure-nextgen:authorization/v20160401:PolicyDefinition" }, { type: "azure-nextgen:authorization/v20161201:PolicyDefinition" }, { type: "azure-nextgen:authorization/v20180301:PolicyDefinition" }, { type: "azure-nextgen:authorization/v20180501:PolicyDefinition" }, { type: "azure-nextgen:authorization/v20190101:PolicyDefinition" }, { type: "azure-nextgen:authorization/v20190601:PolicyDefinition" }, { type: "azure-nextgen:authorization/v20190901:PolicyDefinition" }, { type: "azure-nextgen:authorization/v20200301:PolicyDefinition" }, { type: "azure-nextgen:authorization/v20200901:PolicyDefinition" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(PolicyDefinition.__pulumiType, name, inputs, opts);
    }
}

/**
 * The set of arguments for constructing a PolicyDefinition resource.
 */
export interface PolicyDefinitionArgs {
    /**
     * Gets or sets the policy definition name.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The policy definition name.
     */
    readonly policyDefinitionName: pulumi.Input<string>;
    /**
     * Gets or sets the policy definition properties.
     */
    readonly properties?: pulumi.Input<inputs.authorization.v20151101.PolicyDefinitionProperties>;
}
