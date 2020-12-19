// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.MachineLearningServices.V20191101
{
    public static class ListMachineLearningComputeNodes
    {
        public static Task<ListMachineLearningComputeNodesResult> InvokeAsync(ListMachineLearningComputeNodesArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<ListMachineLearningComputeNodesResult>("azure-nextgen:machinelearningservices/v20191101:listMachineLearningComputeNodes", args ?? new ListMachineLearningComputeNodesArgs(), options.WithVersion());
    }


    public sealed class ListMachineLearningComputeNodesArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// Name of the Azure Machine Learning compute.
        /// </summary>
        [Input("computeName", required: true)]
        public string ComputeName { get; set; } = null!;

        /// <summary>
        /// Name of the resource group in which workspace is located.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// Name of Azure Machine Learning workspace.
        /// </summary>
        [Input("workspaceName", required: true)]
        public string WorkspaceName { get; set; } = null!;

        public ListMachineLearningComputeNodesArgs()
        {
        }
    }


    [OutputType]
    public sealed class ListMachineLearningComputeNodesResult
    {
        /// <summary>
        /// The type of compute
        /// Expected value is 'AmlCompute'.
        /// </summary>
        public readonly string ComputeType;
        /// <summary>
        /// The continuation token.
        /// </summary>
        public readonly string NextLink;
        /// <summary>
        /// The collection of returned AmlCompute nodes details.
        /// </summary>
        public readonly ImmutableArray<Outputs.AmlComputeNodeInformationResponseResult> Nodes;

        [OutputConstructor]
        private ListMachineLearningComputeNodesResult(
            string computeType,

            string nextLink,

            ImmutableArray<Outputs.AmlComputeNodeInformationResponseResult> nodes)
        {
            ComputeType = computeType;
            NextLink = nextLink;
            Nodes = nodes;
        }
    }
}
