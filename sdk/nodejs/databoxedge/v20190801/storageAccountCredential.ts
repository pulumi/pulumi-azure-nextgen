// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

/**
 * The storage account credential.
 */
export class StorageAccountCredential extends pulumi.CustomResource {
    /**
     * Get an existing StorageAccountCredential resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): StorageAccountCredential {
        return new StorageAccountCredential(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-nextgen:databoxedge/v20190801:StorageAccountCredential';

    /**
     * Returns true if the given object is an instance of StorageAccountCredential.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is StorageAccountCredential {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === StorageAccountCredential.__pulumiType;
    }

    /**
     * Encrypted storage key.
     */
    public readonly accountKey!: pulumi.Output<outputs.databoxedge.v20190801.AsymmetricEncryptedSecretResponse | undefined>;
    /**
     * Type of storage accessed on the storage account.
     */
    public readonly accountType!: pulumi.Output<string>;
    /**
     * Alias for the storage account.
     */
    public readonly alias!: pulumi.Output<string>;
    /**
     * Blob end point for private clouds.
     */
    public readonly blobDomainName!: pulumi.Output<string | undefined>;
    /**
     * Connection string for the storage account. Use this string if username and account key are not specified.
     */
    public readonly connectionString!: pulumi.Output<string | undefined>;
    /**
     * The object name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Signifies whether SSL needs to be enabled or not.
     */
    public readonly sslStatus!: pulumi.Output<string>;
    /**
     * Id of the storage account.
     */
    public readonly storageAccountId!: pulumi.Output<string | undefined>;
    /**
     * The hierarchical type of the object.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Username for the storage account.
     */
    public readonly userName!: pulumi.Output<string | undefined>;

    /**
     * Create a StorageAccountCredential resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: StorageAccountCredentialArgs, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (!(opts && opts.id)) {
            if ((!args || args.accountType === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'accountType'");
            }
            if ((!args || args.alias === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'alias'");
            }
            if ((!args || args.deviceName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'deviceName'");
            }
            if ((!args || args.name === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'name'");
            }
            if ((!args || args.resourceGroupName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.sslStatus === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'sslStatus'");
            }
            inputs["accountKey"] = args ? args.accountKey : undefined;
            inputs["accountType"] = args ? args.accountType : undefined;
            inputs["alias"] = args ? args.alias : undefined;
            inputs["blobDomainName"] = args ? args.blobDomainName : undefined;
            inputs["connectionString"] = args ? args.connectionString : undefined;
            inputs["deviceName"] = args ? args.deviceName : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["sslStatus"] = args ? args.sslStatus : undefined;
            inputs["storageAccountId"] = args ? args.storageAccountId : undefined;
            inputs["userName"] = args ? args.userName : undefined;
            inputs["type"] = undefined /*out*/;
        } else {
            inputs["accountKey"] = undefined /*out*/;
            inputs["accountType"] = undefined /*out*/;
            inputs["alias"] = undefined /*out*/;
            inputs["blobDomainName"] = undefined /*out*/;
            inputs["connectionString"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["sslStatus"] = undefined /*out*/;
            inputs["storageAccountId"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
            inputs["userName"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        const aliasOpts = { aliases: [{ type: "azure-nextgen:databoxedge/latest:StorageAccountCredential" }, { type: "azure-nextgen:databoxedge/v20190301:StorageAccountCredential" }, { type: "azure-nextgen:databoxedge/v20190701:StorageAccountCredential" }, { type: "azure-nextgen:databoxedge/v20200501preview:StorageAccountCredential" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(StorageAccountCredential.__pulumiType, name, inputs, opts);
    }
}

/**
 * The set of arguments for constructing a StorageAccountCredential resource.
 */
export interface StorageAccountCredentialArgs {
    /**
     * Encrypted storage key.
     */
    readonly accountKey?: pulumi.Input<inputs.databoxedge.v20190801.AsymmetricEncryptedSecret>;
    /**
     * Type of storage accessed on the storage account.
     */
    readonly accountType: pulumi.Input<string | enums.databoxedge.v20190801.AccountType>;
    /**
     * Alias for the storage account.
     */
    readonly alias: pulumi.Input<string>;
    /**
     * Blob end point for private clouds.
     */
    readonly blobDomainName?: pulumi.Input<string>;
    /**
     * Connection string for the storage account. Use this string if username and account key are not specified.
     */
    readonly connectionString?: pulumi.Input<string>;
    /**
     * The device name.
     */
    readonly deviceName: pulumi.Input<string>;
    /**
     * The storage account credential name.
     */
    readonly name: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Signifies whether SSL needs to be enabled or not.
     */
    readonly sslStatus: pulumi.Input<string | enums.databoxedge.v20190801.SSLStatus>;
    /**
     * Id of the storage account.
     */
    readonly storageAccountId?: pulumi.Input<string>;
    /**
     * Username for the storage account.
     */
    readonly userName?: pulumi.Input<string>;
}
