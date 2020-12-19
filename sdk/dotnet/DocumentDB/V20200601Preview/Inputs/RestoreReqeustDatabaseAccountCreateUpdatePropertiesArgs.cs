// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DocumentDB.V20200601Preview.Inputs
{

    /// <summary>
    /// Properties to restore Azure Cosmos DB database account.
    /// </summary>
    public sealed class RestoreReqeustDatabaseAccountCreateUpdatePropertiesArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// API specific properties. Currently, supported only for MongoDB API.
        /// </summary>
        [Input("apiProperties")]
        public Input<Inputs.ApiPropertiesArgs>? ApiProperties { get; set; }

        /// <summary>
        /// The object representing the policy for taking backups on an account.
        /// </summary>
        [Input("backupPolicy")]
        public InputUnion<Inputs.ContinuousModeBackupPolicyArgs, Inputs.PeriodicModeBackupPolicyArgs>? BackupPolicy { get; set; }

        [Input("capabilities")]
        private InputList<Inputs.CapabilityArgs>? _capabilities;

        /// <summary>
        /// List of Cosmos DB capabilities for the account
        /// </summary>
        public InputList<Inputs.CapabilityArgs> Capabilities
        {
            get => _capabilities ?? (_capabilities = new InputList<Inputs.CapabilityArgs>());
            set => _capabilities = value;
        }

        /// <summary>
        /// The cassandra connector offer type for the Cosmos DB database C* account.
        /// </summary>
        [Input("connectorOffer")]
        public InputUnion<string, Pulumi.AzureNextGen.DocumentDB.V20200601Preview.ConnectorOffer>? ConnectorOffer { get; set; }

        /// <summary>
        /// The consistency policy for the Cosmos DB account.
        /// </summary>
        [Input("consistencyPolicy")]
        public Input<Inputs.ConsistencyPolicyArgs>? ConsistencyPolicy { get; set; }

        [Input("cors")]
        private InputList<Inputs.CorsPolicyArgs>? _cors;

        /// <summary>
        /// The CORS policy for the Cosmos DB database account.
        /// </summary>
        public InputList<Inputs.CorsPolicyArgs> Cors
        {
            get => _cors ?? (_cors = new InputList<Inputs.CorsPolicyArgs>());
            set => _cors = value;
        }

        /// <summary>
        /// Enum to indicate the mode of account creation.
        /// Expected value is 'Restore'.
        /// </summary>
        [Input("createMode", required: true)]
        public Input<string> CreateMode { get; set; } = null!;

        /// <summary>
        /// The offer type for the database
        /// </summary>
        [Input("databaseAccountOfferType", required: true)]
        public Input<Pulumi.AzureNextGen.DocumentDB.V20200601Preview.DatabaseAccountOfferType> DatabaseAccountOfferType { get; set; } = null!;

        /// <summary>
        /// Disable write operations on metadata resources (databases, containers, throughput) via account keys
        /// </summary>
        [Input("disableKeyBasedMetadataWriteAccess")]
        public Input<bool>? DisableKeyBasedMetadataWriteAccess { get; set; }

        /// <summary>
        /// Flag to indicate whether to enable storage analytics.
        /// </summary>
        [Input("enableAnalyticalStorage")]
        public Input<bool>? EnableAnalyticalStorage { get; set; }

        /// <summary>
        /// Enables automatic failover of the write region in the rare event that the region is unavailable due to an outage. Automatic failover will result in a new write region for the account and is chosen based on the failover priorities configured for the account.
        /// </summary>
        [Input("enableAutomaticFailover")]
        public Input<bool>? EnableAutomaticFailover { get; set; }

        /// <summary>
        /// Enables the cassandra connector on the Cosmos DB C* account
        /// </summary>
        [Input("enableCassandraConnector")]
        public Input<bool>? EnableCassandraConnector { get; set; }

        /// <summary>
        /// Flag to indicate whether Free Tier is enabled.
        /// </summary>
        [Input("enableFreeTier")]
        public Input<bool>? EnableFreeTier { get; set; }

        /// <summary>
        /// Enables the account to write in multiple locations
        /// </summary>
        [Input("enableMultipleWriteLocations")]
        public Input<bool>? EnableMultipleWriteLocations { get; set; }

        [Input("ipRules")]
        private InputList<Inputs.IpAddressOrRangeArgs>? _ipRules;

        /// <summary>
        /// List of IpRules.
        /// </summary>
        public InputList<Inputs.IpAddressOrRangeArgs> IpRules
        {
            get => _ipRules ?? (_ipRules = new InputList<Inputs.IpAddressOrRangeArgs>());
            set => _ipRules = value;
        }

        /// <summary>
        /// Flag to indicate whether to enable/disable Virtual Network ACL rules.
        /// </summary>
        [Input("isVirtualNetworkFilterEnabled")]
        public Input<bool>? IsVirtualNetworkFilterEnabled { get; set; }

        /// <summary>
        /// The URI of the key vault
        /// </summary>
        [Input("keyVaultKeyUri")]
        public Input<string>? KeyVaultKeyUri { get; set; }

        [Input("locations", required: true)]
        private InputList<Inputs.LocationArgs>? _locations;

        /// <summary>
        /// An array that contains the georeplication locations enabled for the Cosmos DB account.
        /// </summary>
        public InputList<Inputs.LocationArgs> Locations
        {
            get => _locations ?? (_locations = new InputList<Inputs.LocationArgs>());
            set => _locations = value;
        }

        /// <summary>
        /// Parameters to indicate the information about the restore.
        /// </summary>
        [Input("restoreParameters")]
        public Input<Inputs.RestoreParametersArgs>? RestoreParameters { get; set; }

        [Input("virtualNetworkRules")]
        private InputList<Inputs.VirtualNetworkRuleArgs>? _virtualNetworkRules;

        /// <summary>
        /// List of Virtual Network ACL rules configured for the Cosmos DB account.
        /// </summary>
        public InputList<Inputs.VirtualNetworkRuleArgs> VirtualNetworkRules
        {
            get => _virtualNetworkRules ?? (_virtualNetworkRules = new InputList<Inputs.VirtualNetworkRuleArgs>());
            set => _virtualNetworkRules = value;
        }

        public RestoreReqeustDatabaseAccountCreateUpdatePropertiesArgs()
        {
        }
    }
}
