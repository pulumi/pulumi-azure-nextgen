// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.RecoveryServices.Latest.Inputs
{

    /// <summary>
    /// Base class for generic container of backup items
    /// </summary>
    public sealed class GenericContainerArgs : Pulumi.ResourceArgs
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
        /// Extended information (not returned in List container API calls)
        /// </summary>
        [Input("extendedInformation")]
        public Input<Inputs.GenericContainerExtendedInfoArgs>? ExtendedInformation { get; set; }

        /// <summary>
        /// Name of the container's fabric
        /// </summary>
        [Input("fabricName")]
        public Input<string>? FabricName { get; set; }

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
        /// Status of registration of the container with the Recovery Services Vault.
        /// </summary>
        [Input("registrationStatus")]
        public Input<string>? RegistrationStatus { get; set; }

        public GenericContainerArgs()
        {
        }
    }
}
