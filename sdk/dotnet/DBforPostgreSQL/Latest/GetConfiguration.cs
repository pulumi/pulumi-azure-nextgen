// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DBforPostgreSQL.Latest
{
    public static class GetConfiguration
    {
        public static Task<GetConfigurationResult> InvokeAsync(GetConfigurationArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetConfigurationResult>("azure-nextgen:dbforpostgresql/latest:getConfiguration", args ?? new GetConfigurationArgs(), options.WithVersion());
    }


    public sealed class GetConfigurationArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the server configuration.
        /// </summary>
        [Input("configurationName", required: true)]
        public string ConfigurationName { get; set; } = null!;

        /// <summary>
        /// The name of the resource group. The name is case insensitive.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The name of the server.
        /// </summary>
        [Input("serverName", required: true)]
        public string ServerName { get; set; } = null!;

        public GetConfigurationArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetConfigurationResult
    {
        /// <summary>
        /// Allowed values of the configuration.
        /// </summary>
        public readonly string AllowedValues;
        /// <summary>
        /// Data type of the configuration.
        /// </summary>
        public readonly string DataType;
        /// <summary>
        /// Default value of the configuration.
        /// </summary>
        public readonly string DefaultValue;
        /// <summary>
        /// Description of the configuration.
        /// </summary>
        public readonly string Description;
        /// <summary>
        /// Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// The name of the resource
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// Source of the configuration.
        /// </summary>
        public readonly string? Source;
        /// <summary>
        /// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
        /// </summary>
        public readonly string Type;
        /// <summary>
        /// Value of the configuration.
        /// </summary>
        public readonly string? Value;

        [OutputConstructor]
        private GetConfigurationResult(
            string allowedValues,

            string dataType,

            string defaultValue,

            string description,

            string id,

            string name,

            string? source,

            string type,

            string? value)
        {
            AllowedValues = allowedValues;
            DataType = dataType;
            DefaultValue = defaultValue;
            Description = description;
            Id = id;
            Name = name;
            Source = source;
            Type = type;
            Value = value;
        }
    }
}
