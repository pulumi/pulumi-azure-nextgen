// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DataLakeStore.V20161101
{
    /// <summary>
    /// Data Lake Store account information.
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:datalakestore/v20161101:Account")]
    public partial class Account : Pulumi.CustomResource
    {
        /// <summary>
        /// The unique identifier associated with this Data Lake Store account.
        /// </summary>
        [Output("accountId")]
        public Output<string> AccountId { get; private set; } = null!;

        /// <summary>
        /// The account creation time.
        /// </summary>
        [Output("creationTime")]
        public Output<string> CreationTime { get; private set; } = null!;

        /// <summary>
        /// The commitment tier in use for the current month.
        /// </summary>
        [Output("currentTier")]
        public Output<string> CurrentTier { get; private set; } = null!;

        /// <summary>
        /// The default owner group for all new folders and files created in the Data Lake Store account.
        /// </summary>
        [Output("defaultGroup")]
        public Output<string> DefaultGroup { get; private set; } = null!;

        /// <summary>
        /// The Key Vault encryption configuration.
        /// </summary>
        [Output("encryptionConfig")]
        public Output<Outputs.EncryptionConfigResponse> EncryptionConfig { get; private set; } = null!;

        /// <summary>
        /// The current state of encryption provisioning for this Data Lake Store account.
        /// </summary>
        [Output("encryptionProvisioningState")]
        public Output<string> EncryptionProvisioningState { get; private set; } = null!;

        /// <summary>
        /// The current state of encryption for this Data Lake Store account.
        /// </summary>
        [Output("encryptionState")]
        public Output<string> EncryptionState { get; private set; } = null!;

        /// <summary>
        /// The full CName endpoint for this account.
        /// </summary>
        [Output("endpoint")]
        public Output<string> Endpoint { get; private set; } = null!;

        /// <summary>
        /// The current state of allowing or disallowing IPs originating within Azure through the firewall. If the firewall is disabled, this is not enforced.
        /// </summary>
        [Output("firewallAllowAzureIps")]
        public Output<string> FirewallAllowAzureIps { get; private set; } = null!;

        /// <summary>
        /// The list of firewall rules associated with this Data Lake Store account.
        /// </summary>
        [Output("firewallRules")]
        public Output<ImmutableArray<Outputs.FirewallRuleResponse>> FirewallRules { get; private set; } = null!;

        /// <summary>
        /// The current state of the IP address firewall for this Data Lake Store account.
        /// </summary>
        [Output("firewallState")]
        public Output<string> FirewallState { get; private set; } = null!;

        /// <summary>
        /// The Key Vault encryption identity, if any.
        /// </summary>
        [Output("identity")]
        public Output<Outputs.EncryptionIdentityResponse> Identity { get; private set; } = null!;

        /// <summary>
        /// The account last modified time.
        /// </summary>
        [Output("lastModifiedTime")]
        public Output<string> LastModifiedTime { get; private set; } = null!;

        /// <summary>
        /// The resource location.
        /// </summary>
        [Output("location")]
        public Output<string> Location { get; private set; } = null!;

        /// <summary>
        /// The resource name.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// The commitment tier to use for next month.
        /// </summary>
        [Output("newTier")]
        public Output<string> NewTier { get; private set; } = null!;

        /// <summary>
        /// The provisioning status of the Data Lake Store account.
        /// </summary>
        [Output("provisioningState")]
        public Output<string> ProvisioningState { get; private set; } = null!;

        /// <summary>
        /// The state of the Data Lake Store account.
        /// </summary>
        [Output("state")]
        public Output<string> State { get; private set; } = null!;

        /// <summary>
        /// The resource tags.
        /// </summary>
        [Output("tags")]
        public Output<ImmutableDictionary<string, string>> Tags { get; private set; } = null!;

        /// <summary>
        /// The current state of the trusted identity provider feature for this Data Lake Store account.
        /// </summary>
        [Output("trustedIdProviderState")]
        public Output<string> TrustedIdProviderState { get; private set; } = null!;

        /// <summary>
        /// The list of trusted identity providers associated with this Data Lake Store account.
        /// </summary>
        [Output("trustedIdProviders")]
        public Output<ImmutableArray<Outputs.TrustedIdProviderResponse>> TrustedIdProviders { get; private set; } = null!;

        /// <summary>
        /// The resource type.
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;

        /// <summary>
        /// The list of virtual network rules associated with this Data Lake Store account.
        /// </summary>
        [Output("virtualNetworkRules")]
        public Output<ImmutableArray<Outputs.VirtualNetworkRuleResponse>> VirtualNetworkRules { get; private set; } = null!;


        /// <summary>
        /// Create a Account resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public Account(string name, AccountArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:datalakestore/v20161101:Account", name, args ?? new AccountArgs(), MakeResourceOptions(options, ""))
        {
        }

        private Account(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:datalakestore/v20161101:Account", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:datalakestore/latest:Account"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing Account resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static Account Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new Account(name, id, options);
        }
    }

    public sealed class AccountArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The name of the Data Lake Store account.
        /// </summary>
        [Input("accountName", required: true)]
        public Input<string> AccountName { get; set; } = null!;

        /// <summary>
        /// The default owner group for all new folders and files created in the Data Lake Store account.
        /// </summary>
        [Input("defaultGroup")]
        public Input<string>? DefaultGroup { get; set; }

        /// <summary>
        /// The Key Vault encryption configuration.
        /// </summary>
        [Input("encryptionConfig")]
        public Input<Inputs.EncryptionConfigArgs>? EncryptionConfig { get; set; }

        /// <summary>
        /// The current state of encryption for this Data Lake Store account.
        /// </summary>
        [Input("encryptionState")]
        public Input<Pulumi.AzureNextGen.DataLakeStore.V20161101.EncryptionState>? EncryptionState { get; set; }

        /// <summary>
        /// The current state of allowing or disallowing IPs originating within Azure through the firewall. If the firewall is disabled, this is not enforced.
        /// </summary>
        [Input("firewallAllowAzureIps")]
        public Input<Pulumi.AzureNextGen.DataLakeStore.V20161101.FirewallAllowAzureIpsState>? FirewallAllowAzureIps { get; set; }

        [Input("firewallRules")]
        private InputList<Inputs.CreateFirewallRuleWithAccountParametersArgs>? _firewallRules;

        /// <summary>
        /// The list of firewall rules associated with this Data Lake Store account.
        /// </summary>
        public InputList<Inputs.CreateFirewallRuleWithAccountParametersArgs> FirewallRules
        {
            get => _firewallRules ?? (_firewallRules = new InputList<Inputs.CreateFirewallRuleWithAccountParametersArgs>());
            set => _firewallRules = value;
        }

        /// <summary>
        /// The current state of the IP address firewall for this Data Lake Store account.
        /// </summary>
        [Input("firewallState")]
        public Input<Pulumi.AzureNextGen.DataLakeStore.V20161101.FirewallState>? FirewallState { get; set; }

        /// <summary>
        /// The Key Vault encryption identity, if any.
        /// </summary>
        [Input("identity")]
        public Input<Inputs.EncryptionIdentityArgs>? Identity { get; set; }

        /// <summary>
        /// The resource location.
        /// </summary>
        [Input("location", required: true)]
        public Input<string> Location { get; set; } = null!;

        /// <summary>
        /// The commitment tier to use for next month.
        /// </summary>
        [Input("newTier")]
        public Input<Pulumi.AzureNextGen.DataLakeStore.V20161101.TierType>? NewTier { get; set; }

        /// <summary>
        /// The name of the Azure resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        [Input("tags")]
        private InputMap<string>? _tags;

        /// <summary>
        /// The resource tags.
        /// </summary>
        public InputMap<string> Tags
        {
            get => _tags ?? (_tags = new InputMap<string>());
            set => _tags = value;
        }

        /// <summary>
        /// The current state of the trusted identity provider feature for this Data Lake Store account.
        /// </summary>
        [Input("trustedIdProviderState")]
        public Input<Pulumi.AzureNextGen.DataLakeStore.V20161101.TrustedIdProviderState>? TrustedIdProviderState { get; set; }

        [Input("trustedIdProviders")]
        private InputList<Inputs.CreateTrustedIdProviderWithAccountParametersArgs>? _trustedIdProviders;

        /// <summary>
        /// The list of trusted identity providers associated with this Data Lake Store account.
        /// </summary>
        public InputList<Inputs.CreateTrustedIdProviderWithAccountParametersArgs> TrustedIdProviders
        {
            get => _trustedIdProviders ?? (_trustedIdProviders = new InputList<Inputs.CreateTrustedIdProviderWithAccountParametersArgs>());
            set => _trustedIdProviders = value;
        }

        [Input("virtualNetworkRules")]
        private InputList<Inputs.CreateVirtualNetworkRuleWithAccountParametersArgs>? _virtualNetworkRules;

        /// <summary>
        /// The list of virtual network rules associated with this Data Lake Store account.
        /// </summary>
        public InputList<Inputs.CreateVirtualNetworkRuleWithAccountParametersArgs> VirtualNetworkRules
        {
            get => _virtualNetworkRules ?? (_virtualNetworkRules = new InputList<Inputs.CreateVirtualNetworkRuleWithAccountParametersArgs>());
            set => _virtualNetworkRules = value;
        }

        public AccountArgs()
        {
        }
    }
}
