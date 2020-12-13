// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.ContainerRegistry.V20190601Preview
{
    public static class ListTaskRunDetails
    {
        public static Task<ListTaskRunDetailsResult> InvokeAsync(ListTaskRunDetailsArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<ListTaskRunDetailsResult>("azure-nextgen:containerregistry/v20190601preview:listTaskRunDetails", args ?? new ListTaskRunDetailsArgs(), options.WithVersion());
    }


    public sealed class ListTaskRunDetailsArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the container registry.
        /// </summary>
        [Input("registryName", required: true)]
        public string RegistryName { get; set; } = null!;

        /// <summary>
        /// The name of the resource group to which the container registry belongs.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The name of the task run.
        /// </summary>
        [Input("taskRunName", required: true)]
        public string TaskRunName { get; set; } = null!;

        public ListTaskRunDetailsArgs()
        {
        }
    }


    [OutputType]
    public sealed class ListTaskRunDetailsResult
    {
        /// <summary>
        /// How the run should be forced to rerun even if the run request configuration has not changed
        /// </summary>
        public readonly string? ForceUpdateTag;
        /// <summary>
        /// The resource ID.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// Identity for the resource.
        /// </summary>
        public readonly Outputs.IdentityPropertiesResponse? Identity;
        /// <summary>
        /// The location of the resource
        /// </summary>
        public readonly string? Location;
        /// <summary>
        /// The name of the resource.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// The provisioning state of this task run
        /// </summary>
        public readonly string ProvisioningState;
        /// <summary>
        /// The request (parameters) for the run
        /// </summary>
        public readonly Union<Outputs.DockerBuildRequestResponse, Union<Outputs.EncodedTaskRunRequestResponse, Union<Outputs.FileTaskRunRequestResponse, Outputs.TaskRunRequestResponse>>>? RunRequest;
        /// <summary>
        /// The result of this task run
        /// </summary>
        public readonly Outputs.RunResponse RunResult;
        /// <summary>
        /// Metadata pertaining to creation and last modification of the resource.
        /// </summary>
        public readonly Outputs.SystemDataResponse SystemData;
        /// <summary>
        /// The type of the resource.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private ListTaskRunDetailsResult(
            string? forceUpdateTag,

            string id,

            Outputs.IdentityPropertiesResponse? identity,

            string? location,

            string name,

            string provisioningState,

            Union<Outputs.DockerBuildRequestResponse, Union<Outputs.EncodedTaskRunRequestResponse, Union<Outputs.FileTaskRunRequestResponse, Outputs.TaskRunRequestResponse>>>? runRequest,

            Outputs.RunResponse runResult,

            Outputs.SystemDataResponse systemData,

            string type)
        {
            ForceUpdateTag = forceUpdateTag;
            Id = id;
            Identity = identity;
            Location = location;
            Name = name;
            ProvisioningState = provisioningState;
            RunRequest = runRequest;
            RunResult = runResult;
            SystemData = systemData;
            Type = type;
        }
    }
}
