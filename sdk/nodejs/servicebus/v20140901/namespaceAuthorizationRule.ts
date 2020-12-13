// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

/**
 * Description of a namespace authorization rule.
 */
export class NamespaceAuthorizationRule extends pulumi.CustomResource {
    /**
     * Get an existing NamespaceAuthorizationRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): NamespaceAuthorizationRule {
        return new NamespaceAuthorizationRule(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-nextgen:servicebus/v20140901:NamespaceAuthorizationRule';

    /**
     * Returns true if the given object is an instance of NamespaceAuthorizationRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NamespaceAuthorizationRule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NamespaceAuthorizationRule.__pulumiType;
    }

    /**
     * A string that describes Claim Type for authorization rule.
     */
    public readonly claimType!: pulumi.Output<string | undefined>;
    /**
     * A string that describes Claim Value of authorization rule.
     */
    public readonly claimValue!: pulumi.Output<string | undefined>;
    /**
     * The time the namespace was created.
     */
    public /*out*/ readonly createdTime!: pulumi.Output<string>;
    /**
     * A string that describes the Key Name of authorization rule.
     */
    public readonly keyName!: pulumi.Output<string | undefined>;
    /**
     * Resource location.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * The time the namespace was updated.
     */
    public /*out*/ readonly modifiedTime!: pulumi.Output<string>;
    /**
     * Resource name
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * A base64-encoded 256-bit primary key for signing and validating the SAS token.
     */
    public readonly primaryKey!: pulumi.Output<string | undefined>;
    /**
     * The rights associated with the rule.
     */
    public readonly rights!: pulumi.Output<string[]>;
    /**
     * A base64-encoded 256-bit primary key for signing and validating the SAS token.
     */
    public readonly secondaryKey!: pulumi.Output<string | undefined>;
    /**
     * Resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a NamespaceAuthorizationRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NamespaceAuthorizationRuleArgs, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (!(opts && opts.id)) {
            if ((!args || args.authorizationRuleName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'authorizationRuleName'");
            }
            if ((!args || args.namespaceName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'namespaceName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.rights === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'rights'");
            }
            inputs["authorizationRuleName"] = args ? args.authorizationRuleName : undefined;
            inputs["claimType"] = args ? args.claimType : undefined;
            inputs["claimValue"] = args ? args.claimValue : undefined;
            inputs["keyName"] = args ? args.keyName : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["namespaceName"] = args ? args.namespaceName : undefined;
            inputs["primaryKey"] = args ? args.primaryKey : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["rights"] = args ? args.rights : undefined;
            inputs["secondaryKey"] = args ? args.secondaryKey : undefined;
            inputs["createdTime"] = undefined /*out*/;
            inputs["modifiedTime"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        } else {
            inputs["claimType"] = undefined /*out*/;
            inputs["claimValue"] = undefined /*out*/;
            inputs["createdTime"] = undefined /*out*/;
            inputs["keyName"] = undefined /*out*/;
            inputs["location"] = undefined /*out*/;
            inputs["modifiedTime"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["primaryKey"] = undefined /*out*/;
            inputs["rights"] = undefined /*out*/;
            inputs["secondaryKey"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        const aliasOpts = { aliases: [{ type: "azure-nextgen:servicebus/latest:NamespaceAuthorizationRule" }, { type: "azure-nextgen:servicebus/v20150801:NamespaceAuthorizationRule" }, { type: "azure-nextgen:servicebus/v20170401:NamespaceAuthorizationRule" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(NamespaceAuthorizationRule.__pulumiType, name, inputs, opts);
    }
}

/**
 * The set of arguments for constructing a NamespaceAuthorizationRule resource.
 */
export interface NamespaceAuthorizationRuleArgs {
    /**
     * The authorization rule name.
     */
    readonly authorizationRuleName: pulumi.Input<string>;
    /**
     * A string that describes Claim Type for authorization rule.
     */
    readonly claimType?: pulumi.Input<string>;
    /**
     * A string that describes Claim Value of authorization rule.
     */
    readonly claimValue?: pulumi.Input<string>;
    /**
     * A string that describes the Key Name of authorization rule.
     */
    readonly keyName?: pulumi.Input<string>;
    /**
     * data center location.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * Name of the authorization rule.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The namespace name
     */
    readonly namespaceName: pulumi.Input<string>;
    /**
     * A base64-encoded 256-bit primary key for signing and validating the SAS token.
     */
    readonly primaryKey?: pulumi.Input<string>;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The rights associated with the rule.
     */
    readonly rights: pulumi.Input<pulumi.Input<enums.servicebus.v20140901.AccessRights>[]>;
    /**
     * A base64-encoded 256-bit primary key for signing and validating the SAS token.
     */
    readonly secondaryKey?: pulumi.Input<string>;
}
