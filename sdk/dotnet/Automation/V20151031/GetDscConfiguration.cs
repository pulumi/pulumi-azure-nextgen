// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Automation.V20151031
{
    public static class GetDscConfiguration
    {
        public static Task<GetDscConfigurationResult> InvokeAsync(GetDscConfigurationArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetDscConfigurationResult>("azure-nextgen:automation/v20151031:getDscConfiguration", args ?? new GetDscConfigurationArgs(), options.WithVersion());
    }


    public sealed class GetDscConfigurationArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the automation account.
        /// </summary>
        [Input("automationAccountName", required: true)]
        public string AutomationAccountName { get; set; } = null!;

        /// <summary>
        /// The configuration name.
        /// </summary>
        [Input("configurationName", required: true)]
        public string ConfigurationName { get; set; } = null!;

        /// <summary>
        /// Name of an Azure Resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public GetDscConfigurationArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetDscConfigurationResult
    {
        /// <summary>
        /// Gets or sets the creation time.
        /// </summary>
        public readonly string? CreationTime;
        /// <summary>
        /// Gets or sets the description.
        /// </summary>
        public readonly string? Description;
        /// <summary>
        /// Gets or sets the etag of the resource.
        /// </summary>
        public readonly string? Etag;
        /// <summary>
        /// Fully qualified resource Id for the resource
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// Gets or sets the job count of the configuration.
        /// </summary>
        public readonly int? JobCount;
        /// <summary>
        /// Gets or sets the last modified time.
        /// </summary>
        public readonly string? LastModifiedTime;
        /// <summary>
        /// The Azure Region where the resource lives
        /// </summary>
        public readonly string? Location;
        /// <summary>
        /// Gets or sets verbose log option.
        /// </summary>
        public readonly bool? LogVerbose;
        /// <summary>
        /// The name of the resource
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// Gets the number of compiled node configurations.
        /// </summary>
        public readonly int? NodeConfigurationCount;
        /// <summary>
        /// Gets or sets the configuration parameters.
        /// </summary>
        public readonly ImmutableDictionary<string, Outputs.DscConfigurationParameterResponse>? Parameters;
        /// <summary>
        /// Gets or sets the provisioning state of the configuration.
        /// </summary>
        public readonly string? ProvisioningState;
        /// <summary>
        /// Gets or sets the source.
        /// </summary>
        public readonly Outputs.ContentSourceResponse? Source;
        /// <summary>
        /// Gets or sets the state of the configuration.
        /// </summary>
        public readonly string? State;
        /// <summary>
        /// Resource tags.
        /// </summary>
        public readonly ImmutableDictionary<string, string>? Tags;
        /// <summary>
        /// The type of the resource.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetDscConfigurationResult(
            string? creationTime,

            string? description,

            string? etag,

            string id,

            int? jobCount,

            string? lastModifiedTime,

            string? location,

            bool? logVerbose,

            string name,

            int? nodeConfigurationCount,

            ImmutableDictionary<string, Outputs.DscConfigurationParameterResponse>? parameters,

            string? provisioningState,

            Outputs.ContentSourceResponse? source,

            string? state,

            ImmutableDictionary<string, string>? tags,

            string type)
        {
            CreationTime = creationTime;
            Description = description;
            Etag = etag;
            Id = id;
            JobCount = jobCount;
            LastModifiedTime = lastModifiedTime;
            Location = location;
            LogVerbose = logVerbose;
            Name = name;
            NodeConfigurationCount = nodeConfigurationCount;
            Parameters = parameters;
            ProvisioningState = provisioningState;
            Source = source;
            State = state;
            Tags = tags;
            Type = type;
        }
    }
}
