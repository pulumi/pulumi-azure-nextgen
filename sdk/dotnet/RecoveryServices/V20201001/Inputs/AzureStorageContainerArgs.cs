// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.RecoveryServices.V20201001.Inputs
{

    /// <summary>
    /// Azure Storage Account workload-specific container.
    /// </summary>
    public sealed class AzureStorageContainerArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Type of backup management for the container.
        /// </summary>
        [Input("backupManagementType")]
        public Input<string>? BackupManagementType { get; set; }

        /// <summary>
        /// Type of the container. The value of this property for: 1. Compute Azure VM is Microsoft.Compute/virtualMachines 2.
        /// Classic Compute Azure VM is Microsoft.ClassicCompute/virtualMachines 3. Windows machines (like MAB, DPM etc) is
        /// Windows 4. Azure SQL instance is AzureSqlContainer. 5. Storage containers is StorageContainer. 6. Azure workload
        /// Backup is VMAppContainer
        /// </summary>
        [Input("containerType", required: true)]
        public Input<string> ContainerType { get; set; } = null!;

        /// <summary>
        /// Friendly name of the container.
        /// </summary>
        [Input("friendlyName")]
        public Input<string>? FriendlyName { get; set; }

        /// <summary>
        /// Status of health of the container.
        /// </summary>
        [Input("healthStatus")]
        public Input<string>? HealthStatus { get; set; }

        /// <summary>
        /// Number of items backed up in this container.
        /// </summary>
        [Input("protectedItemCount")]
        public Input<int>? ProtectedItemCount { get; set; }

        /// <summary>
        /// Status of registration of the container with the Recovery Services Vault.
        /// </summary>
        [Input("registrationStatus")]
        public Input<string>? RegistrationStatus { get; set; }

        /// <summary>
        /// Resource group name of Recovery Services Vault.
        /// </summary>
        [Input("resourceGroup")]
        public Input<string>? ResourceGroup { get; set; }

        /// <summary>
        /// Fully qualified ARM url.
        /// </summary>
        [Input("sourceResourceId")]
        public Input<string>? SourceResourceId { get; set; }

        /// <summary>
        /// Storage account version.
        /// </summary>
        [Input("storageAccountVersion")]
        public Input<string>? StorageAccountVersion { get; set; }

        public AzureStorageContainerArgs()
        {
        }
    }
}
