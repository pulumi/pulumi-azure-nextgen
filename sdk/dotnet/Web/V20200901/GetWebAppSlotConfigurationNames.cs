// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Web.V20200901
{
    public static class GetWebAppSlotConfigurationNames
    {
        public static Task<GetWebAppSlotConfigurationNamesResult> InvokeAsync(GetWebAppSlotConfigurationNamesArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetWebAppSlotConfigurationNamesResult>("azure-nextgen:web/v20200901:getWebAppSlotConfigurationNames", args ?? new GetWebAppSlotConfigurationNamesArgs(), options.WithVersion());
    }


    public sealed class GetWebAppSlotConfigurationNamesArgs : Pulumi.InvokeArgs
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

        public GetWebAppSlotConfigurationNamesArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetWebAppSlotConfigurationNamesResult
    {
        /// <summary>
        /// List of application settings names.
        /// </summary>
        public readonly ImmutableArray<string> AppSettingNames;
        /// <summary>
        /// List of external Azure storage account identifiers.
        /// </summary>
        public readonly ImmutableArray<string> AzureStorageConfigNames;
        /// <summary>
        /// List of connection string names.
        /// </summary>
        public readonly ImmutableArray<string> ConnectionStringNames;
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
        /// The system metadata relating to this resource.
        /// </summary>
        public readonly Outputs.SystemDataResponse SystemData;
        /// <summary>
        /// Resource type.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetWebAppSlotConfigurationNamesResult(
            ImmutableArray<string> appSettingNames,

            ImmutableArray<string> azureStorageConfigNames,

            ImmutableArray<string> connectionStringNames,

            string id,

            string? kind,

            string name,

            Outputs.SystemDataResponse systemData,

            string type)
        {
            AppSettingNames = appSettingNames;
            AzureStorageConfigNames = azureStorageConfigNames;
            ConnectionStringNames = connectionStringNames;
            Id = id;
            Kind = kind;
            Name = name;
            SystemData = systemData;
            Type = type;
        }
    }
}
