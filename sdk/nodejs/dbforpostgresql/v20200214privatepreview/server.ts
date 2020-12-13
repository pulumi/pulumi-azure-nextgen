// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

/**
 * Represents a server.
 */
export class Server extends pulumi.CustomResource {
    /**
     * Get an existing Server resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Server {
        return new Server(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-nextgen:dbforpostgresql/v20200214privatepreview:Server';

    /**
     * Returns true if the given object is an instance of Server.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Server {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Server.__pulumiType;
    }

    /**
     * The administrator's login name of a server. Can only be specified when the server is being created (and is required for creation).
     */
    public readonly administratorLogin!: pulumi.Output<string | undefined>;
    /**
     * The administrator login password (required for server creation).
     */
    public readonly administratorLoginPassword!: pulumi.Output<string | undefined>;
    /**
     * availability Zone information of the server.
     */
    public readonly availabilityZone!: pulumi.Output<string | undefined>;
    /**
     * Status showing whether the data encryption is enabled with customer-managed keys.
     */
    public /*out*/ readonly byokEnforcement!: pulumi.Output<string>;
    /**
     * The mode to create a new PostgreSQL server.
     */
    public readonly createMode!: pulumi.Output<string | undefined>;
    public readonly delegatedSubnetArguments!: pulumi.Output<outputs.dbforpostgresql.v20200214privatepreview.ServerPropertiesResponseDelegatedSubnetArguments | undefined>;
    /**
     * The display name of a server.
     */
    public readonly displayName!: pulumi.Output<string | undefined>;
    /**
     * The fully qualified domain name of a server.
     */
    public /*out*/ readonly fullyQualifiedDomainName!: pulumi.Output<string>;
    /**
     * stand by count value can be either enabled or disabled
     */
    public readonly haEnabled!: pulumi.Output<string | undefined>;
    /**
     * A state of a HA server that is visible to user.
     */
    public /*out*/ readonly haState!: pulumi.Output<string>;
    /**
     * The Azure Active Directory identity of the server.
     */
    public readonly identity!: pulumi.Output<outputs.dbforpostgresql.v20200214privatepreview.IdentityResponse | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Maintenance window of a server.
     */
    public readonly maintenanceWindow!: pulumi.Output<outputs.dbforpostgresql.v20200214privatepreview.MaintenanceWindowResponse | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Restore point creation time (ISO8601 format), specifying the time to restore from.
     */
    public readonly pointInTimeUTC!: pulumi.Output<string | undefined>;
    /**
     * public network access is enabled or not
     */
    public /*out*/ readonly publicNetworkAccess!: pulumi.Output<string>;
    /**
     * The SKU (pricing tier) of the server.
     */
    public readonly sku!: pulumi.Output<outputs.dbforpostgresql.v20200214privatepreview.SkuResponse | undefined>;
    /**
     * The source PostgreSQL server name to restore from.
     */
    public readonly sourceServerName!: pulumi.Output<string | undefined>;
    /**
     * availability Zone information of the server.
     */
    public /*out*/ readonly standbyAvailabilityZone!: pulumi.Output<string>;
    /**
     * A state of a server that is visible to user.
     */
    public /*out*/ readonly state!: pulumi.Output<string>;
    /**
     * Storage profile of a server.
     */
    public readonly storageProfile!: pulumi.Output<outputs.dbforpostgresql.v20200214privatepreview.StorageProfileResponse | undefined>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * PostgreSQL Server version.
     */
    public readonly version!: pulumi.Output<string | undefined>;

    /**
     * Create a Server resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ServerArgs, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (!(opts && opts.id)) {
            if ((!args || args.location === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'location'");
            }
            if ((!args || args.resourceGroupName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serverName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'serverName'");
            }
            inputs["administratorLogin"] = args ? args.administratorLogin : undefined;
            inputs["administratorLoginPassword"] = args ? args.administratorLoginPassword : undefined;
            inputs["availabilityZone"] = args ? args.availabilityZone : undefined;
            inputs["createMode"] = args ? args.createMode : undefined;
            inputs["delegatedSubnetArguments"] = args ? args.delegatedSubnetArguments : undefined;
            inputs["displayName"] = args ? args.displayName : undefined;
            inputs["haEnabled"] = args ? args.haEnabled : undefined;
            inputs["identity"] = args ? args.identity : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["maintenanceWindow"] = args ? args.maintenanceWindow : undefined;
            inputs["pointInTimeUTC"] = args ? args.pointInTimeUTC : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["serverName"] = args ? args.serverName : undefined;
            inputs["sku"] = args ? args.sku : undefined;
            inputs["sourceServerName"] = args ? args.sourceServerName : undefined;
            inputs["storageProfile"] = args ? args.storageProfile : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["version"] = args ? args.version : undefined;
            inputs["byokEnforcement"] = undefined /*out*/;
            inputs["fullyQualifiedDomainName"] = undefined /*out*/;
            inputs["haState"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["publicNetworkAccess"] = undefined /*out*/;
            inputs["standbyAvailabilityZone"] = undefined /*out*/;
            inputs["state"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        } else {
            inputs["administratorLogin"] = undefined /*out*/;
            inputs["administratorLoginPassword"] = undefined /*out*/;
            inputs["availabilityZone"] = undefined /*out*/;
            inputs["byokEnforcement"] = undefined /*out*/;
            inputs["createMode"] = undefined /*out*/;
            inputs["delegatedSubnetArguments"] = undefined /*out*/;
            inputs["displayName"] = undefined /*out*/;
            inputs["fullyQualifiedDomainName"] = undefined /*out*/;
            inputs["haEnabled"] = undefined /*out*/;
            inputs["haState"] = undefined /*out*/;
            inputs["identity"] = undefined /*out*/;
            inputs["location"] = undefined /*out*/;
            inputs["maintenanceWindow"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["pointInTimeUTC"] = undefined /*out*/;
            inputs["publicNetworkAccess"] = undefined /*out*/;
            inputs["sku"] = undefined /*out*/;
            inputs["sourceServerName"] = undefined /*out*/;
            inputs["standbyAvailabilityZone"] = undefined /*out*/;
            inputs["state"] = undefined /*out*/;
            inputs["storageProfile"] = undefined /*out*/;
            inputs["tags"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
            inputs["version"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        const aliasOpts = { aliases: [{ type: "azure-nextgen:dbforpostgresql/v20200214preview:Server" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(Server.__pulumiType, name, inputs, opts);
    }
}

/**
 * The set of arguments for constructing a Server resource.
 */
export interface ServerArgs {
    /**
     * The administrator's login name of a server. Can only be specified when the server is being created (and is required for creation).
     */
    readonly administratorLogin?: pulumi.Input<string>;
    /**
     * The administrator login password (required for server creation).
     */
    readonly administratorLoginPassword?: pulumi.Input<string>;
    /**
     * availability Zone information of the server.
     */
    readonly availabilityZone?: pulumi.Input<string>;
    /**
     * The mode to create a new PostgreSQL server.
     */
    readonly createMode?: pulumi.Input<string | enums.dbforpostgresql.v20200214privatepreview.CreateMode>;
    readonly delegatedSubnetArguments?: pulumi.Input<inputs.dbforpostgresql.v20200214privatepreview.ServerPropertiesDelegatedSubnetArguments>;
    /**
     * The display name of a server.
     */
    readonly displayName?: pulumi.Input<string>;
    /**
     * stand by count value can be either enabled or disabled
     */
    readonly haEnabled?: pulumi.Input<enums.dbforpostgresql.v20200214privatepreview.HAEnabledEnum>;
    /**
     * The Azure Active Directory identity of the server.
     */
    readonly identity?: pulumi.Input<inputs.dbforpostgresql.v20200214privatepreview.Identity>;
    /**
     * The geo-location where the resource lives
     */
    readonly location: pulumi.Input<string>;
    /**
     * Maintenance window of a server.
     */
    readonly maintenanceWindow?: pulumi.Input<inputs.dbforpostgresql.v20200214privatepreview.MaintenanceWindow>;
    /**
     * Restore point creation time (ISO8601 format), specifying the time to restore from.
     */
    readonly pointInTimeUTC?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the server.
     */
    readonly serverName: pulumi.Input<string>;
    /**
     * The SKU (pricing tier) of the server.
     */
    readonly sku?: pulumi.Input<inputs.dbforpostgresql.v20200214privatepreview.Sku>;
    /**
     * The source PostgreSQL server name to restore from.
     */
    readonly sourceServerName?: pulumi.Input<string>;
    /**
     * Storage profile of a server.
     */
    readonly storageProfile?: pulumi.Input<inputs.dbforpostgresql.v20200214privatepreview.StorageProfile>;
    /**
     * Resource tags.
     */
    readonly tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * PostgreSQL Server version.
     */
    readonly version?: pulumi.Input<string | enums.dbforpostgresql.v20200214privatepreview.ServerVersion>;
}
