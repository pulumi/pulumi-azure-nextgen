// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

/**
 * A SQL virtual machine.
 */
export class SqlVirtualMachine extends pulumi.CustomResource {
    /**
     * Get an existing SqlVirtualMachine resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): SqlVirtualMachine {
        return new SqlVirtualMachine(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-nextgen:sqlvirtualmachine/v20170301preview:SqlVirtualMachine';

    /**
     * Returns true if the given object is an instance of SqlVirtualMachine.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SqlVirtualMachine {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SqlVirtualMachine.__pulumiType;
    }

    /**
     * Auto backup settings for SQL Server.
     */
    public readonly autoBackupSettings!: pulumi.Output<outputs.sqlvirtualmachine.v20170301preview.AutoBackupSettingsResponse | undefined>;
    /**
     * Auto patching settings for applying critical security updates to SQL virtual machine.
     */
    public readonly autoPatchingSettings!: pulumi.Output<outputs.sqlvirtualmachine.v20170301preview.AutoPatchingSettingsResponse | undefined>;
    /**
     * Azure Active Directory identity of the server.
     */
    public readonly identity!: pulumi.Output<outputs.sqlvirtualmachine.v20170301preview.ResourceIdentityResponse | undefined>;
    /**
     * Key vault credential settings.
     */
    public readonly keyVaultCredentialSettings!: pulumi.Output<outputs.sqlvirtualmachine.v20170301preview.KeyVaultCredentialSettingsResponse | undefined>;
    /**
     * Resource location.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Provisioning state to track the async operation status.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * SQL Server configuration management settings.
     */
    public readonly serverConfigurationsManagementSettings!: pulumi.Output<outputs.sqlvirtualmachine.v20170301preview.ServerConfigurationsManagementSettingsResponse | undefined>;
    /**
     * SQL image offer. Examples include SQL2016-WS2016, SQL2017-WS2016.
     */
    public readonly sqlImageOffer!: pulumi.Output<string | undefined>;
    /**
     * SQL Server edition type.
     */
    public readonly sqlImageSku!: pulumi.Output<string | undefined>;
    /**
     * SQL Server Management type.
     */
    public readonly sqlManagement!: pulumi.Output<string | undefined>;
    /**
     * SQL Server license type.
     */
    public readonly sqlServerLicenseType!: pulumi.Output<string | undefined>;
    /**
     * ARM resource id of the SQL virtual machine group this SQL virtual machine is or will be part of.
     */
    public readonly sqlVirtualMachineGroupResourceId!: pulumi.Output<string | undefined>;
    /**
     * Storage Configuration Settings.
     */
    public readonly storageConfigurationSettings!: pulumi.Output<outputs.sqlvirtualmachine.v20170301preview.StorageConfigurationSettingsResponse | undefined>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * ARM Resource id of underlying virtual machine created from SQL marketplace image.
     */
    public readonly virtualMachineResourceId!: pulumi.Output<string | undefined>;
    /**
     * Domain credentials for setting up Windows Server Failover Cluster for SQL availability group.
     */
    public readonly wsfcDomainCredentials!: pulumi.Output<outputs.sqlvirtualmachine.v20170301preview.WsfcDomainCredentialsResponse | undefined>;

    /**
     * Create a SqlVirtualMachine resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SqlVirtualMachineArgs, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (!(opts && opts.id)) {
            if ((!args || args.location === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'location'");
            }
            if ((!args || args.resourceGroupName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.sqlVirtualMachineName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'sqlVirtualMachineName'");
            }
            inputs["autoBackupSettings"] = args ? args.autoBackupSettings : undefined;
            inputs["autoPatchingSettings"] = args ? args.autoPatchingSettings : undefined;
            inputs["identity"] = args ? args.identity : undefined;
            inputs["keyVaultCredentialSettings"] = args ? args.keyVaultCredentialSettings : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["serverConfigurationsManagementSettings"] = args ? args.serverConfigurationsManagementSettings : undefined;
            inputs["sqlImageOffer"] = args ? args.sqlImageOffer : undefined;
            inputs["sqlImageSku"] = args ? args.sqlImageSku : undefined;
            inputs["sqlManagement"] = args ? args.sqlManagement : undefined;
            inputs["sqlServerLicenseType"] = args ? args.sqlServerLicenseType : undefined;
            inputs["sqlVirtualMachineGroupResourceId"] = args ? args.sqlVirtualMachineGroupResourceId : undefined;
            inputs["sqlVirtualMachineName"] = args ? args.sqlVirtualMachineName : undefined;
            inputs["storageConfigurationSettings"] = args ? args.storageConfigurationSettings : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["virtualMachineResourceId"] = args ? args.virtualMachineResourceId : undefined;
            inputs["wsfcDomainCredentials"] = args ? args.wsfcDomainCredentials : undefined;
            inputs["name"] = undefined /*out*/;
            inputs["provisioningState"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        } else {
            inputs["autoBackupSettings"] = undefined /*out*/;
            inputs["autoPatchingSettings"] = undefined /*out*/;
            inputs["identity"] = undefined /*out*/;
            inputs["keyVaultCredentialSettings"] = undefined /*out*/;
            inputs["location"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["provisioningState"] = undefined /*out*/;
            inputs["serverConfigurationsManagementSettings"] = undefined /*out*/;
            inputs["sqlImageOffer"] = undefined /*out*/;
            inputs["sqlImageSku"] = undefined /*out*/;
            inputs["sqlManagement"] = undefined /*out*/;
            inputs["sqlServerLicenseType"] = undefined /*out*/;
            inputs["sqlVirtualMachineGroupResourceId"] = undefined /*out*/;
            inputs["storageConfigurationSettings"] = undefined /*out*/;
            inputs["tags"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
            inputs["virtualMachineResourceId"] = undefined /*out*/;
            inputs["wsfcDomainCredentials"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(SqlVirtualMachine.__pulumiType, name, inputs, opts);
    }
}

/**
 * The set of arguments for constructing a SqlVirtualMachine resource.
 */
export interface SqlVirtualMachineArgs {
    /**
     * Auto backup settings for SQL Server.
     */
    readonly autoBackupSettings?: pulumi.Input<inputs.sqlvirtualmachine.v20170301preview.AutoBackupSettings>;
    /**
     * Auto patching settings for applying critical security updates to SQL virtual machine.
     */
    readonly autoPatchingSettings?: pulumi.Input<inputs.sqlvirtualmachine.v20170301preview.AutoPatchingSettings>;
    /**
     * Azure Active Directory identity of the server.
     */
    readonly identity?: pulumi.Input<inputs.sqlvirtualmachine.v20170301preview.ResourceIdentity>;
    /**
     * Key vault credential settings.
     */
    readonly keyVaultCredentialSettings?: pulumi.Input<inputs.sqlvirtualmachine.v20170301preview.KeyVaultCredentialSettings>;
    /**
     * Resource location.
     */
    readonly location: pulumi.Input<string>;
    /**
     * Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * SQL Server configuration management settings.
     */
    readonly serverConfigurationsManagementSettings?: pulumi.Input<inputs.sqlvirtualmachine.v20170301preview.ServerConfigurationsManagementSettings>;
    /**
     * SQL image offer. Examples include SQL2016-WS2016, SQL2017-WS2016.
     */
    readonly sqlImageOffer?: pulumi.Input<string>;
    /**
     * SQL Server edition type.
     */
    readonly sqlImageSku?: pulumi.Input<string | enums.sqlvirtualmachine.v20170301preview.SqlImageSku>;
    /**
     * SQL Server Management type.
     */
    readonly sqlManagement?: pulumi.Input<string | enums.sqlvirtualmachine.v20170301preview.SqlManagementMode>;
    /**
     * SQL Server license type.
     */
    readonly sqlServerLicenseType?: pulumi.Input<string | enums.sqlvirtualmachine.v20170301preview.SqlServerLicenseType>;
    /**
     * ARM resource id of the SQL virtual machine group this SQL virtual machine is or will be part of.
     */
    readonly sqlVirtualMachineGroupResourceId?: pulumi.Input<string>;
    /**
     * Name of the SQL virtual machine.
     */
    readonly sqlVirtualMachineName: pulumi.Input<string>;
    /**
     * Storage Configuration Settings.
     */
    readonly storageConfigurationSettings?: pulumi.Input<inputs.sqlvirtualmachine.v20170301preview.StorageConfigurationSettings>;
    /**
     * Resource tags.
     */
    readonly tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * ARM Resource id of underlying virtual machine created from SQL marketplace image.
     */
    readonly virtualMachineResourceId?: pulumi.Input<string>;
    /**
     * Domain credentials for setting up Windows Server Failover Cluster for SQL availability group.
     */
    readonly wsfcDomainCredentials?: pulumi.Input<inputs.sqlvirtualmachine.v20170301preview.WsfcDomainCredentials>;
}
