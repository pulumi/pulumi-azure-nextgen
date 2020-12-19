// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200501preview

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func ListMachineLearningComputeNodes(ctx *pulumi.Context, args *ListMachineLearningComputeNodesArgs, opts ...pulumi.InvokeOption) (*ListMachineLearningComputeNodesResult, error) {
	var rv ListMachineLearningComputeNodesResult
	err := ctx.Invoke("azure-nextgen:machinelearningservices/v20200501preview:listMachineLearningComputeNodes", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type ListMachineLearningComputeNodesArgs struct {
	// Name of the Azure Machine Learning compute.
	ComputeName string `pulumi:"computeName"`
	// Name of the resource group in which workspace is located.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// Name of Azure Machine Learning workspace.
	WorkspaceName string `pulumi:"workspaceName"`
}

// Compute node information related to a AmlCompute.
type ListMachineLearningComputeNodesResult struct {
	// The type of compute
	// Expected value is 'AmlCompute'.
	ComputeType string `pulumi:"computeType"`
	// The continuation token.
	NextLink string `pulumi:"nextLink"`
	// The collection of returned AmlCompute nodes details.
	Nodes []AmlComputeNodeInformationResponse `pulumi:"nodes"`
}
