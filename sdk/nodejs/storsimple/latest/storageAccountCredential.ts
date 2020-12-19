// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

/**
 * The storage account credential.
 * Latest API Version: 2017-06-01.
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
    public static readonly __pulumiType = 'azure-nextgen:storsimple/latest:StorageAccountCredential';

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
     * The details of the storage account password.
     */
    public readonly accessKey!: pulumi.Output<outputs.storsimple.latest.AsymmetricEncryptedSecretResponse | undefined>;
    /**
     * The storage endpoint
     */
    public readonly endPoint!: pulumi.Output<string>;
    /**
     * The Kind of the object. Currently only Series8000 is supported
     */
    public readonly kind!: pulumi.Output<string | undefined>;
    /**
     * The name of the object.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Signifies whether SSL needs to be enabled or not.
     */
    public readonly sslStatus!: pulumi.Output<string>;
    /**
     * The hierarchical type of the object.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The count of volumes using this storage account credential.
     */
    public /*out*/ readonly volumesCount!: pulumi.Output<number>;

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
            if ((!args || args.endPoint === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'endPoint'");
            }
            if ((!args || args.managerName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'managerName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.sslStatus === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'sslStatus'");
            }
            if ((!args || args.storageAccountCredentialName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'storageAccountCredentialName'");
            }
            inputs["accessKey"] = args ? args.accessKey : undefined;
            inputs["endPoint"] = args ? args.endPoint : undefined;
            inputs["kind"] = args ? args.kind : undefined;
            inputs["managerName"] = args ? args.managerName : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["sslStatus"] = args ? args.sslStatus : undefined;
            inputs["storageAccountCredentialName"] = args ? args.storageAccountCredentialName : undefined;
            inputs["name"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
            inputs["volumesCount"] = undefined /*out*/;
        } else {
            inputs["accessKey"] = undefined /*out*/;
            inputs["endPoint"] = undefined /*out*/;
            inputs["kind"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["sslStatus"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
            inputs["volumesCount"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        const aliasOpts = { aliases: [{ type: "azure-nextgen:storsimple/v20161001:StorageAccountCredential" }, { type: "azure-nextgen:storsimple/v20170601:StorageAccountCredential" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(StorageAccountCredential.__pulumiType, name, inputs, opts);
    }
}

/**
 * The set of arguments for constructing a StorageAccountCredential resource.
 */
export interface StorageAccountCredentialArgs {
    /**
     * The details of the storage account password.
     */
    readonly accessKey?: pulumi.Input<inputs.storsimple.latest.AsymmetricEncryptedSecret>;
    /**
     * The storage endpoint
     */
    readonly endPoint: pulumi.Input<string>;
    /**
     * The Kind of the object. Currently only Series8000 is supported
     */
    readonly kind?: pulumi.Input<enums.storsimple.latest.Kind>;
    /**
     * The manager name
     */
    readonly managerName: pulumi.Input<string>;
    /**
     * The resource group name
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Signifies whether SSL needs to be enabled or not.
     */
    readonly sslStatus: pulumi.Input<enums.storsimple.latest.SslStatus>;
    /**
     * The storage account credential name.
     */
    readonly storageAccountCredentialName: pulumi.Input<string>;
}
