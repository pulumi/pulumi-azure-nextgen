// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Web.V20200901
{
    public static class ListWebAppBackupConfigurationSlot
    {
        public static Task<ListWebAppBackupConfigurationSlotResult> InvokeAsync(ListWebAppBackupConfigurationSlotArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<ListWebAppBackupConfigurationSlotResult>("azure-nextgen:web/v20200901:listWebAppBackupConfigurationSlot", args ?? new ListWebAppBackupConfigurationSlotArgs(), options.WithVersion());
    }


    public sealed class ListWebAppBackupConfigurationSlotArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// Name of the app.
        /// </summary>
        [Input("name", required: true)]
        public string Name { get; set; } = null!;

        /// <summary>
        /// Name of the resource group to which the resource belongs.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// Name of the deployment slot. If a slot is not specified, the API will get the backup configuration for the production slot.
        /// </summary>
        [Input("slot", required: true)]
        public string Slot { get; set; } = null!;

        public ListWebAppBackupConfigurationSlotArgs()
        {
        }
    }


    [OutputType]
    public sealed class ListWebAppBackupConfigurationSlotResult
    {
        /// <summary>
        /// Name of the backup.
        /// </summary>
        public readonly string? BackupName;
        /// <summary>
        /// Schedule for the backup if it is executed periodically.
        /// </summary>
        public readonly Outputs.BackupScheduleResponseResult? BackupSchedule;
        /// <summary>
        /// Databases included in the backup.
        /// </summary>
        public readonly ImmutableArray<Outputs.DatabaseBackupSettingResponseResult> Databases;
        /// <summary>
        /// True if the backup schedule is enabled (must be included in that case), false if the backup schedule should be disabled.
        /// </summary>
        public readonly bool? Enabled;
        /// <summary>
        /// Resource Id.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// Kind of resource.
        /// </summary>
        public readonly string? Kind;
        /// <summary>
        /// Resource Name.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// SAS URL to the container.
        /// </summary>
        public readonly string StorageAccountUrl;
        /// <summary>
        /// The system metadata relating to this resource.
        /// </summary>
        public readonly Outputs.SystemDataResponse SystemData;
        /// <summary>
        /// Resource type.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private ListWebAppBackupConfigurationSlotResult(
            string? backupName,

            Outputs.BackupScheduleResponseResult? backupSchedule,

            ImmutableArray<Outputs.DatabaseBackupSettingResponseResult> databases,

            bool? enabled,

            string id,

            string? kind,

            string name,

            string storageAccountUrl,

            Outputs.SystemDataResponse systemData,

            string type)
        {
            BackupName = backupName;
            BackupSchedule = backupSchedule;
            Databases = databases;
            Enabled = enabled;
            Id = id;
            Kind = kind;
            Name = name;
            StorageAccountUrl = storageAccountUrl;
            SystemData = systemData;
            Type = type;
        }
    }
}
