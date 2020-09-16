import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Data Lake Store account information.
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
     * The unique identifier associated with this Data Lake Store account.
     */
    readonly accountId: pulumi.Output<string>;
    /**
     * The account creation time.
     */
    readonly creationTime: pulumi.Output<string>;
    /**
     * The commitment tier in use for the current month.
     */
    readonly currentTier: pulumi.Output<string>;
    /**
     * The default owner group for all new folders and files created in the Data Lake Store account.
     */
    readonly defaultGroup: pulumi.Output<string>;
    /**
     * The Key Vault encryption configuration.
     */
    readonly encryptionConfig: pulumi.Output<outputs.datalakestore.v20161101.EncryptionConfigResponse>;
    /**
     * The current state of encryption provisioning for this Data Lake Store account.
     */
    readonly encryptionProvisioningState: pulumi.Output<string>;
    /**
     * The current state of encryption for this Data Lake Store account.
     */
    readonly encryptionState: pulumi.Output<string>;
    /**
     * The full CName endpoint for this account.
     */
    readonly endpoint: pulumi.Output<string>;
    /**
     * The current state of allowing or disallowing IPs originating within Azure through the firewall. If the firewall is disabled, this is not enforced.
     */
    readonly firewallAllowAzureIps: pulumi.Output<string>;
    /**
     * The list of firewall rules associated with this Data Lake Store account.
     */
    readonly firewallRules: pulumi.Output<outputs.datalakestore.v20161101.FirewallRuleResponse[]>;
    /**
     * The current state of the IP address firewall for this Data Lake Store account.
     */
    readonly firewallState: pulumi.Output<string>;
    /**
     * The Key Vault encryption identity, if any.
     */
    readonly identity: pulumi.Output<outputs.datalakestore.v20161101.EncryptionIdentityResponse>;
    /**
     * The account last modified time.
     */
    readonly lastModifiedTime: pulumi.Output<string>;
    /**
     * The resource location.
     */
    readonly location: pulumi.Output<string>;
    /**
     * The resource name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The commitment tier to use for next month.
     */
    readonly newTier: pulumi.Output<string>;
    /**
     * The provisioning status of the Data Lake Store account.
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * The state of the Data Lake Store account.
     */
    readonly state: pulumi.Output<string>;
    /**
     * The resource tags.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    }>;
    /**
     * The current state of the trusted identity provider feature for this Data Lake Store account.
     */
    readonly trustedIdProviderState: pulumi.Output<string>;
    /**
     * The list of trusted identity providers associated with this Data Lake Store account.
     */
    readonly trustedIdProviders: pulumi.Output<outputs.datalakestore.v20161101.TrustedIdProviderResponse[]>;
    /**
     * The resource type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * The list of virtual network rules associated with this Data Lake Store account.
     */
    readonly virtualNetworkRules: pulumi.Output<outputs.datalakestore.v20161101.VirtualNetworkRuleResponse[]>;
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
     * The name of the Data Lake Store account.
     */
    readonly accountName: pulumi.Input<string>;
    /**
     * The default owner group for all new folders and files created in the Data Lake Store account.
     */
    readonly defaultGroup?: pulumi.Input<string>;
    /**
     * The Key Vault encryption configuration.
     */
    readonly encryptionConfig?: pulumi.Input<inputs.datalakestore.v20161101.EncryptionConfig>;
    /**
     * The current state of encryption for this Data Lake Store account.
     */
    readonly encryptionState?: pulumi.Input<string>;
    /**
     * The current state of allowing or disallowing IPs originating within Azure through the firewall. If the firewall is disabled, this is not enforced.
     */
    readonly firewallAllowAzureIps?: pulumi.Input<string>;
    /**
     * The list of firewall rules associated with this Data Lake Store account.
     */
    readonly firewallRules?: pulumi.Input<pulumi.Input<inputs.datalakestore.v20161101.CreateFirewallRuleWithAccountParameters>[]>;
    /**
     * The current state of the IP address firewall for this Data Lake Store account.
     */
    readonly firewallState?: pulumi.Input<string>;
    /**
     * The Key Vault encryption identity, if any.
     */
    readonly identity?: pulumi.Input<inputs.datalakestore.v20161101.EncryptionIdentity>;
    /**
     * The resource location.
     */
    readonly location: pulumi.Input<string>;
    /**
     * The commitment tier to use for next month.
     */
    readonly newTier?: pulumi.Input<string>;
    /**
     * The name of the Azure resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The resource tags.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The current state of the trusted identity provider feature for this Data Lake Store account.
     */
    readonly trustedIdProviderState?: pulumi.Input<string>;
    /**
     * The list of trusted identity providers associated with this Data Lake Store account.
     */
    readonly trustedIdProviders?: pulumi.Input<pulumi.Input<inputs.datalakestore.v20161101.CreateTrustedIdProviderWithAccountParameters>[]>;
    /**
     * The list of virtual network rules associated with this Data Lake Store account.
     */
    readonly virtualNetworkRules?: pulumi.Input<pulumi.Input<inputs.datalakestore.v20161101.CreateVirtualNetworkRuleWithAccountParameters>[]>;
}
