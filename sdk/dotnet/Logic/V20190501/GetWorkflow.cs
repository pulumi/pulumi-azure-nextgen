// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Logic.V20190501
{
    public static class GetWorkflow
    {
        public static Task<GetWorkflowResult> InvokeAsync(GetWorkflowArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetWorkflowResult>("azure-nextgen:logic/v20190501:getWorkflow", args ?? new GetWorkflowArgs(), options.WithVersion());
    }


    public sealed class GetWorkflowArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The resource group name.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The workflow name.
        /// </summary>
        [Input("workflowName", required: true)]
        public string WorkflowName { get; set; } = null!;

        public GetWorkflowArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetWorkflowResult
    {
        /// <summary>
        /// The access control configuration.
        /// </summary>
        public readonly Outputs.FlowAccessControlConfigurationResponse? AccessControl;
        /// <summary>
        /// Gets the access endpoint.
        /// </summary>
        public readonly string AccessEndpoint;
        /// <summary>
        /// Gets the changed time.
        /// </summary>
        public readonly string ChangedTime;
        /// <summary>
        /// Gets the created time.
        /// </summary>
        public readonly string CreatedTime;
        /// <summary>
        /// The definition.
        /// </summary>
        public readonly object? Definition;
        /// <summary>
        /// The endpoints configuration.
        /// </summary>
        public readonly Outputs.FlowEndpointsConfigurationResponse? EndpointsConfiguration;
        /// <summary>
        /// The resource id.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// The integration account.
        /// </summary>
        public readonly Outputs.ResourceReferenceResponse? IntegrationAccount;
        /// <summary>
        /// The integration service environment.
        /// </summary>
        public readonly Outputs.ResourceReferenceResponse? IntegrationServiceEnvironment;
        /// <summary>
        /// The resource location.
        /// </summary>
        public readonly string? Location;
        /// <summary>
        /// Gets the resource name.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// The parameters.
        /// </summary>
        public readonly ImmutableDictionary<string, Outputs.WorkflowParameterResponse>? Parameters;
        /// <summary>
        /// Gets the provisioning state.
        /// </summary>
        public readonly string ProvisioningState;
        /// <summary>
        /// The sku.
        /// </summary>
        public readonly Outputs.SkuResponse Sku;
        /// <summary>
        /// The state.
        /// </summary>
        public readonly string? State;
        /// <summary>
        /// The resource tags.
        /// </summary>
        public readonly ImmutableDictionary<string, string>? Tags;
        /// <summary>
        /// Gets the resource type.
        /// </summary>
        public readonly string Type;
        /// <summary>
        /// Gets the version.
        /// </summary>
        public readonly string Version;

        [OutputConstructor]
        private GetWorkflowResult(
            Outputs.FlowAccessControlConfigurationResponse? accessControl,

            string accessEndpoint,

            string changedTime,

            string createdTime,

            object? definition,

            Outputs.FlowEndpointsConfigurationResponse? endpointsConfiguration,

            string id,

            Outputs.ResourceReferenceResponse? integrationAccount,

            Outputs.ResourceReferenceResponse? integrationServiceEnvironment,

            string? location,

            string name,

            ImmutableDictionary<string, Outputs.WorkflowParameterResponse>? parameters,

            string provisioningState,

            Outputs.SkuResponse sku,

            string? state,

            ImmutableDictionary<string, string>? tags,

            string type,

            string version)
        {
            AccessControl = accessControl;
            AccessEndpoint = accessEndpoint;
            ChangedTime = changedTime;
            CreatedTime = createdTime;
            Definition = definition;
            EndpointsConfiguration = endpointsConfiguration;
            Id = id;
            IntegrationAccount = integrationAccount;
            IntegrationServiceEnvironment = integrationServiceEnvironment;
            Location = location;
            Name = name;
            Parameters = parameters;
            ProvisioningState = provisioningState;
            Sku = sku;
            State = state;
            Tags = tags;
            Type = type;
            Version = version;
        }
    }
}
