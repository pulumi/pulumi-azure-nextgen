// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.ServiceBus.Latest
{
    public static class GetMigrationConfig
    {
        public static Task<GetMigrationConfigResult> InvokeAsync(GetMigrationConfigArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetMigrationConfigResult>("azure-nextgen:servicebus/latest:getMigrationConfig", args ?? new GetMigrationConfigArgs(), options.WithVersion());
    }


    public sealed class GetMigrationConfigArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The configuration name. Should always be "$default".
        /// </summary>
        [Input("configName", required: true)]
        public string ConfigName { get; set; } = null!;

        /// <summary>
        /// The namespace name
        /// </summary>
        [Input("namespaceName", required: true)]
        public string NamespaceName { get; set; } = null!;

        /// <summary>
        /// Name of the Resource group within the Azure subscription.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public GetMigrationConfigArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetMigrationConfigResult
    {
        /// <summary>
        /// Resource Id
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// State in which Standard to Premium Migration is, possible values : Unknown, Reverting, Completing, Initiating, Syncing, Active
        /// </summary>
        public readonly string MigrationState;
        /// <summary>
        /// Resource name
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// Number of entities pending to be replicated.
        /// </summary>
        public readonly int PendingReplicationOperationsCount;
        /// <summary>
        /// Name to access Standard Namespace after migration
        /// </summary>
        public readonly string PostMigrationName;
        /// <summary>
        /// Provisioning state of Migration Configuration 
        /// </summary>
        public readonly string ProvisioningState;
        /// <summary>
        /// Existing premium Namespace ARM Id name which has no entities, will be used for migration
        /// </summary>
        public readonly string TargetNamespace;
        /// <summary>
        /// Resource type
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetMigrationConfigResult(
            string id,

            string migrationState,

            string name,

            int pendingReplicationOperationsCount,

            string postMigrationName,

            string provisioningState,

            string targetNamespace,

            string type)
        {
            Id = id;
            MigrationState = migrationState;
            Name = name;
            PendingReplicationOperationsCount = pendingReplicationOperationsCount;
            PostMigrationName = postMigrationName;
            ProvisioningState = provisioningState;
            TargetNamespace = targetNamespace;
            Type = type;
        }
    }
}
