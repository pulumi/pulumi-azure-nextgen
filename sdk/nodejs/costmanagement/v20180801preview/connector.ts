// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

/**
 * The Connector model definition
 */
export class Connector extends pulumi.CustomResource {
    /**
     * Get an existing Connector resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Connector {
        return new Connector(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-nextgen:costmanagement/v20180801preview:Connector';

    /**
     * Returns true if the given object is an instance of Connector.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Connector {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Connector.__pulumiType;
    }

    /**
     * Collection information
     */
    public /*out*/ readonly collection!: pulumi.Output<outputs.costmanagement.v20180801preview.ConnectorCollectionInfoResponse>;
    /**
     * Connector definition creation datetime
     */
    public /*out*/ readonly createdOn!: pulumi.Output<string>;
    /**
     * Credentials authentication key (eg AWS ARN)
     */
    public readonly credentialsKey!: pulumi.Output<string | undefined>;
    /**
     * Credentials secret (eg AWS ExternalId)
     */
    public readonly credentialsSecret!: pulumi.Output<string | undefined>;
    /**
     * Connector DisplayName (defaults to Name)
     */
    public readonly displayName!: pulumi.Output<string | undefined>;
    /**
     * Connector kind (eg aws)
     */
    public readonly kind!: pulumi.Output<string | undefined>;
    /**
     * Connector location
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * Connector last modified datetime
     */
    public /*out*/ readonly modifiedOn!: pulumi.Output<string>;
    /**
     * Connector name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Connector providerAccountId (determined from credentials)
     */
    public /*out*/ readonly providerAccountId!: pulumi.Output<string>;
    /**
     * Identifying source report. (For AWS this is a CUR report name, defined with Daily and with Resources)
     */
    public readonly reportId!: pulumi.Output<string | undefined>;
    /**
     * Connector status
     */
    public readonly status!: pulumi.Output<string | undefined>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Connector type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Connector resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ConnectorArgs, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (!(opts && opts.id)) {
            if ((!args || args.connectorName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'connectorName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            inputs["connectorName"] = args ? args.connectorName : undefined;
            inputs["credentialsKey"] = args ? args.credentialsKey : undefined;
            inputs["credentialsSecret"] = args ? args.credentialsSecret : undefined;
            inputs["displayName"] = args ? args.displayName : undefined;
            inputs["kind"] = args ? args.kind : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["reportId"] = args ? args.reportId : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["status"] = args ? args.status : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["collection"] = undefined /*out*/;
            inputs["createdOn"] = undefined /*out*/;
            inputs["modifiedOn"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["providerAccountId"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        } else {
            inputs["collection"] = undefined /*out*/;
            inputs["createdOn"] = undefined /*out*/;
            inputs["credentialsKey"] = undefined /*out*/;
            inputs["credentialsSecret"] = undefined /*out*/;
            inputs["displayName"] = undefined /*out*/;
            inputs["kind"] = undefined /*out*/;
            inputs["location"] = undefined /*out*/;
            inputs["modifiedOn"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["providerAccountId"] = undefined /*out*/;
            inputs["reportId"] = undefined /*out*/;
            inputs["status"] = undefined /*out*/;
            inputs["tags"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(Connector.__pulumiType, name, inputs, opts);
    }
}

/**
 * The set of arguments for constructing a Connector resource.
 */
export interface ConnectorArgs {
    /**
     * Connector Name.
     */
    readonly connectorName: pulumi.Input<string>;
    /**
     * Credentials authentication key (eg AWS ARN)
     */
    readonly credentialsKey?: pulumi.Input<string>;
    /**
     * Credentials secret (eg AWS ExternalId)
     */
    readonly credentialsSecret?: pulumi.Input<string>;
    /**
     * Connector DisplayName (defaults to Name)
     */
    readonly displayName?: pulumi.Input<string>;
    /**
     * Connector kind (eg aws)
     */
    readonly kind?: pulumi.Input<string>;
    /**
     * Connector location
     */
    readonly location?: pulumi.Input<string>;
    /**
     * Identifying source report. (For AWS this is a CUR report name, defined with Daily and with Resources)
     */
    readonly reportId?: pulumi.Input<string>;
    /**
     * Azure Resource Group Name.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Connector status
     */
    readonly status?: pulumi.Input<string | enums.costmanagement.v20180801preview.ConnectorStatus>;
    /**
     * Resource tags.
     */
    readonly tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
