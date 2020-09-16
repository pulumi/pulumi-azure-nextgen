import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Contains information about an Azure Batch account.
 */
export declare class BatchAccount extends pulumi.CustomResource {
    /**
     * Get an existing BatchAccount resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): BatchAccount;
    /**
     * Returns true if the given object is an instance of BatchAccount.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is BatchAccount;
    /**
     * The endpoint used by this account to interact with the Batch services.
     */
    readonly accountEndpoint: pulumi.Output<string>;
    readonly activeJobAndJobScheduleQuota: pulumi.Output<number>;
    /**
     * Contains information about the auto storage account associated with a Batch account.
     */
    readonly autoStorage: pulumi.Output<outputs.batch.v20170101.AutoStoragePropertiesResponse>;
    readonly coreQuota: pulumi.Output<number>;
    /**
     * Identifies the Azure key vault associated with a Batch account.
     */
    readonly keyVaultReference: pulumi.Output<outputs.batch.v20170101.KeyVaultReferenceResponse>;
    /**
     * The location of the resource
     */
    readonly location: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    readonly name: pulumi.Output<string>;
    /**
     * The allocation mode for creating pools in the Batch account.
     */
    readonly poolAllocationMode: pulumi.Output<string>;
    readonly poolQuota: pulumi.Output<number>;
    /**
     * The provisioned state of the resource
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * The tags of the resource
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    }>;
    /**
     * The type of the resource
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a BatchAccount resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BatchAccountArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a BatchAccount resource.
 */
export interface BatchAccountArgs {
    /**
     * A name for the Batch account which must be unique within the region. Batch account names must be between 3 and 24 characters in length and must use only numbers and lowercase letters. This name is used as part of the DNS name that is used to access the Batch service in the region in which the account is created. For example: http://accountname.region.batch.azure.com/.
     */
    readonly accountName: pulumi.Input<string>;
    /**
     * The properties related to auto storage account.
     */
    readonly autoStorage?: pulumi.Input<inputs.batch.v20170101.AutoStorageBaseProperties>;
    /**
     * A reference to the Azure key vault associated with the Batch account.
     */
    readonly keyVaultReference?: pulumi.Input<inputs.batch.v20170101.KeyVaultReference>;
    /**
     * The region in which to create the account.
     */
    readonly location: pulumi.Input<string>;
    /**
     * The pool allocation mode also affects how clients may authenticate to the Batch Service API. If the mode is BatchService, clients may authenticate using access keys or Azure Active Directory. If the mode is UserSubscription, clients must use Azure Active Directory. The default is BatchService.
     */
    readonly poolAllocationMode?: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the new Batch account.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The user specified tags associated with the account.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
