// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

/**
 * Azure Active Directory administrator.
 */
export class ServerAzureADAdministrator extends pulumi.CustomResource {
    /**
     * Get an existing ServerAzureADAdministrator resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ServerAzureADAdministrator {
        return new ServerAzureADAdministrator(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-nextgen:sql/v20190601preview:ServerAzureADAdministrator';

    /**
     * Returns true if the given object is an instance of ServerAzureADAdministrator.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ServerAzureADAdministrator {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ServerAzureADAdministrator.__pulumiType;
    }

    /**
     * Type of the sever administrator.
     */
    public readonly administratorType!: pulumi.Output<string>;
    /**
     * Azure Active Directory only Authentication enabled.
     */
    public /*out*/ readonly azureADOnlyAuthentication!: pulumi.Output<boolean>;
    /**
     * Login name of the server administrator.
     */
    public readonly login!: pulumi.Output<string>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * SID (object ID) of the server administrator.
     */
    public readonly sid!: pulumi.Output<string>;
    /**
     * Tenant ID of the administrator.
     */
    public readonly tenantId!: pulumi.Output<string | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ServerAzureADAdministrator resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ServerAzureADAdministratorArgs, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (!(opts && opts.id)) {
            if ((!args || args.administratorName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'administratorName'");
            }
            if ((!args || args.administratorType === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'administratorType'");
            }
            if ((!args || args.login === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'login'");
            }
            if ((!args || args.resourceGroupName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serverName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'serverName'");
            }
            if ((!args || args.sid === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'sid'");
            }
            inputs["administratorName"] = args ? args.administratorName : undefined;
            inputs["administratorType"] = args ? args.administratorType : undefined;
            inputs["login"] = args ? args.login : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["serverName"] = args ? args.serverName : undefined;
            inputs["sid"] = args ? args.sid : undefined;
            inputs["tenantId"] = args ? args.tenantId : undefined;
            inputs["azureADOnlyAuthentication"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        } else {
            inputs["administratorType"] = undefined /*out*/;
            inputs["azureADOnlyAuthentication"] = undefined /*out*/;
            inputs["login"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["sid"] = undefined /*out*/;
            inputs["tenantId"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        const aliasOpts = { aliases: [{ type: "azure-nextgen:sql/latest:ServerAzureADAdministrator" }, { type: "azure-nextgen:sql/v20140401:ServerAzureADAdministrator" }, { type: "azure-nextgen:sql/v20180601preview:ServerAzureADAdministrator" }, { type: "azure-nextgen:sql/v20200202preview:ServerAzureADAdministrator" }, { type: "azure-nextgen:sql/v20200801preview:ServerAzureADAdministrator" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(ServerAzureADAdministrator.__pulumiType, name, inputs, opts);
    }
}

/**
 * The set of arguments for constructing a ServerAzureADAdministrator resource.
 */
export interface ServerAzureADAdministratorArgs {
    /**
     * The name of server active directory administrator.
     */
    readonly administratorName: pulumi.Input<string>;
    /**
     * Type of the sever administrator.
     */
    readonly administratorType: pulumi.Input<string | enums.sql.v20190601preview.AdministratorType>;
    /**
     * Login name of the server administrator.
     */
    readonly login: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the server.
     */
    readonly serverName: pulumi.Input<string>;
    /**
     * SID (object ID) of the server administrator.
     */
    readonly sid: pulumi.Input<string>;
    /**
     * Tenant ID of the administrator.
     */
    readonly tenantId?: pulumi.Input<string>;
}
