import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * A Data Lake Analytics account object, containing all information associated with the named Data Lake Analytics account.
 */
export declare class Account extends pulumi.CustomResource {
    /**
     * Get an existing Account resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Account;
    /**
     * Returns true if the given object is an instance of Account.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Account;
    /**
     * The unique identifier associated with this Data Lake Analytics account.
     */
    readonly accountId: pulumi.Output<string>;
    /**
     * The list of compute policies associated with this account.
     */
    readonly computePolicies: pulumi.Output<outputs.datalakeanalytics.v20161101.ComputePolicyResponse[]>;
    /**
     * The account creation time.
     */
    readonly creationTime: pulumi.Output<string>;
    /**
     * The commitment tier in use for the current month.
     */
    readonly currentTier: pulumi.Output<string>;
    /**
     * The list of Data Lake Store accounts associated with this account.
     */
    readonly dataLakeStoreAccounts: pulumi.Output<outputs.datalakeanalytics.v20161101.DataLakeStoreAccountInformationResponse[]>;
    /**
     * The default Data Lake Store account associated with this account.
     */
    readonly defaultDataLakeStoreAccount: pulumi.Output<string>;
    /**
     * The full CName endpoint for this account.
     */
    readonly endpoint: pulumi.Output<string>;
    /**
     * The current state of allowing or disallowing IPs originating within Azure through the firewall. If the firewall is disabled, this is not enforced.
     */
    readonly firewallAllowAzureIps: pulumi.Output<string>;
    /**
     * The list of firewall rules associated with this account.
     */
    readonly firewallRules: pulumi.Output<outputs.datalakeanalytics.v20161101.FirewallRuleResponse[]>;
    /**
     * The current state of the IP address firewall for this account.
     */
    readonly firewallState: pulumi.Output<string>;
    /**
     * The account last modified time.
     */
    readonly lastModifiedTime: pulumi.Output<string>;
    /**
     * The resource location.
     */
    readonly location: pulumi.Output<string>;
    /**
     * The maximum supported degree of parallelism for this account.
     */
    readonly maxDegreeOfParallelism: pulumi.Output<number>;
    /**
     * The maximum supported degree of parallelism per job for this account.
     */
    readonly maxDegreeOfParallelismPerJob: pulumi.Output<number>;
    /**
     * The maximum supported jobs running under the account at the same time.
     */
    readonly maxJobCount: pulumi.Output<number>;
    /**
     * The minimum supported priority per job for this account.
     */
    readonly minPriorityPerJob: pulumi.Output<number>;
    /**
     * The resource name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The commitment tier for the next month.
     */
    readonly newTier: pulumi.Output<string>;
    /**
     * The provisioning status of the Data Lake Analytics account.
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * The number of days that job metadata is retained.
     */
    readonly queryStoreRetention: pulumi.Output<number>;
    /**
     * The state of the Data Lake Analytics account.
     */
    readonly state: pulumi.Output<string>;
    /**
     * The list of Azure Blob Storage accounts associated with this account.
     */
    readonly storageAccounts: pulumi.Output<outputs.datalakeanalytics.v20161101.StorageAccountInformationResponse[]>;
    /**
     * The system defined maximum supported degree of parallelism for this account, which restricts the maximum value of parallelism the user can set for the account.
     */
    readonly systemMaxDegreeOfParallelism: pulumi.Output<number>;
    /**
     * The system defined maximum supported jobs running under the account at the same time, which restricts the maximum number of running jobs the user can set for the account.
     */
    readonly systemMaxJobCount: pulumi.Output<number>;
    /**
     * The resource tags.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    }>;
    /**
     * The resource type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a Account resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AccountArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a Account resource.
 */
export interface AccountArgs {
    /**
     * The name of the Data Lake Analytics account.
     */
    readonly accountName: pulumi.Input<string>;
    /**
     * The list of compute policies associated with this account.
     */
    readonly computePolicies?: pulumi.Input<pulumi.Input<inputs.datalakeanalytics.v20161101.CreateComputePolicyWithAccountParameters>[]>;
    /**
     * The list of Data Lake Store accounts associated with this account.
     */
    readonly dataLakeStoreAccounts: pulumi.Input<pulumi.Input<inputs.datalakeanalytics.v20161101.AddDataLakeStoreWithAccountParameters>[]>;
    /**
     * The default Data Lake Store account associated with this account.
     */
    readonly defaultDataLakeStoreAccount: pulumi.Input<string>;
    /**
     * The current state of allowing or disallowing IPs originating within Azure through the firewall. If the firewall is disabled, this is not enforced.
     */
    readonly firewallAllowAzureIps?: pulumi.Input<string>;
    /**
     * The list of firewall rules associated with this account.
     */
    readonly firewallRules?: pulumi.Input<pulumi.Input<inputs.datalakeanalytics.v20161101.CreateFirewallRuleWithAccountParameters>[]>;
    /**
     * The current state of the IP address firewall for this account.
     */
    readonly firewallState?: pulumi.Input<string>;
    /**
     * The resource location.
     */
    readonly location: pulumi.Input<string>;
    /**
     * The maximum supported degree of parallelism for this account.
     */
    readonly maxDegreeOfParallelism?: pulumi.Input<number>;
    /**
     * The maximum supported degree of parallelism per job for this account.
     */
    readonly maxDegreeOfParallelismPerJob?: pulumi.Input<number>;
    /**
     * The maximum supported jobs running under the account at the same time.
     */
    readonly maxJobCount?: pulumi.Input<number>;
    /**
     * The minimum supported priority per job for this account.
     */
    readonly minPriorityPerJob?: pulumi.Input<number>;
    /**
     * The commitment tier for the next month.
     */
    readonly newTier?: pulumi.Input<string>;
    /**
     * The number of days that job metadata is retained.
     */
    readonly queryStoreRetention?: pulumi.Input<number>;
    /**
     * The name of the Azure resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The list of Azure Blob Storage accounts associated with this account.
     */
    readonly storageAccounts?: pulumi.Input<pulumi.Input<inputs.datalakeanalytics.v20161101.AddStorageAccountWithAccountParameters>[]>;
    /**
     * The resource tags.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
