// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

/**
 * Description of the WCF relay resource.
 * Latest API Version: 2017-04-01.
 */
export class WCFRelay extends pulumi.CustomResource {
    /**
     * Get an existing WCFRelay resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): WCFRelay {
        return new WCFRelay(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-nextgen:relay/latest:WCFRelay';

    /**
     * Returns true if the given object is an instance of WCFRelay.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WCFRelay {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WCFRelay.__pulumiType;
    }

    /**
     * The time the WCF relay was created.
     */
    public /*out*/ readonly createdAt!: pulumi.Output<string>;
    /**
     * Returns true if the relay is dynamic; otherwise, false.
     */
    public /*out*/ readonly isDynamic!: pulumi.Output<boolean>;
    /**
     * The number of listeners for this relay. Note that min :1 and max:25 are supported.
     */
    public /*out*/ readonly listenerCount!: pulumi.Output<number>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * WCF relay type.
     */
    public readonly relayType!: pulumi.Output<string | undefined>;
    /**
     * Returns true if client authorization is needed for this relay; otherwise, false.
     */
    public readonly requiresClientAuthorization!: pulumi.Output<boolean | undefined>;
    /**
     * Returns true if transport security is needed for this relay; otherwise, false.
     */
    public readonly requiresTransportSecurity!: pulumi.Output<boolean | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The time the namespace was updated.
     */
    public /*out*/ readonly updatedAt!: pulumi.Output<string>;
    /**
     * The usermetadata is a placeholder to store user-defined string data for the WCF Relay endpoint. For example, it can be used to store descriptive data, such as list of teams and their contact information. Also, user-defined configuration settings can be stored.
     */
    public readonly userMetadata!: pulumi.Output<string | undefined>;

    /**
     * Create a WCFRelay resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WCFRelayArgs, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (!(opts && opts.id)) {
            if ((!args || args.namespaceName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'namespaceName'");
            }
            if ((!args || args.relayName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'relayName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            inputs["namespaceName"] = args ? args.namespaceName : undefined;
            inputs["relayName"] = args ? args.relayName : undefined;
            inputs["relayType"] = args ? args.relayType : undefined;
            inputs["requiresClientAuthorization"] = args ? args.requiresClientAuthorization : undefined;
            inputs["requiresTransportSecurity"] = args ? args.requiresTransportSecurity : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["userMetadata"] = args ? args.userMetadata : undefined;
            inputs["createdAt"] = undefined /*out*/;
            inputs["isDynamic"] = undefined /*out*/;
            inputs["listenerCount"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
            inputs["updatedAt"] = undefined /*out*/;
        } else {
            inputs["createdAt"] = undefined /*out*/;
            inputs["isDynamic"] = undefined /*out*/;
            inputs["listenerCount"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["relayType"] = undefined /*out*/;
            inputs["requiresClientAuthorization"] = undefined /*out*/;
            inputs["requiresTransportSecurity"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
            inputs["updatedAt"] = undefined /*out*/;
            inputs["userMetadata"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        const aliasOpts = { aliases: [{ type: "azure-nextgen:relay/v20160701:WCFRelay" }, { type: "azure-nextgen:relay/v20170401:WCFRelay" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(WCFRelay.__pulumiType, name, inputs, opts);
    }
}

/**
 * The set of arguments for constructing a WCFRelay resource.
 */
export interface WCFRelayArgs {
    /**
     * The namespace name
     */
    readonly namespaceName: pulumi.Input<string>;
    /**
     * The relay name.
     */
    readonly relayName: pulumi.Input<string>;
    /**
     * WCF relay type.
     */
    readonly relayType?: pulumi.Input<enums.relay.latest.Relaytype>;
    /**
     * Returns true if client authorization is needed for this relay; otherwise, false.
     */
    readonly requiresClientAuthorization?: pulumi.Input<boolean>;
    /**
     * Returns true if transport security is needed for this relay; otherwise, false.
     */
    readonly requiresTransportSecurity?: pulumi.Input<boolean>;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The usermetadata is a placeholder to store user-defined string data for the WCF Relay endpoint. For example, it can be used to store descriptive data, such as list of teams and their contact information. Also, user-defined configuration settings can be stored.
     */
    readonly userMetadata?: pulumi.Input<string>;
}
