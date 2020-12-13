// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200901preview

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupMachineLearningCompute(ctx *pulumi.Context, args *LookupMachineLearningComputeArgs, opts ...pulumi.InvokeOption) (*LookupMachineLearningComputeResult, error) {
	var rv LookupMachineLearningComputeResult
	err := ctx.Invoke("azure-nextgen:machinelearningservices/v20200901preview:getMachineLearningCompute", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupMachineLearningComputeArgs struct {
	// Name of the Azure Machine Learning compute.
	ComputeName string `pulumi:"computeName"`
	// Name of the resource group in which workspace is located.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// Name of Azure Machine Learning workspace.
	WorkspaceName string `pulumi:"workspaceName"`
}

// Machine Learning compute object wrapped into ARM resource envelope.
type LookupMachineLearningComputeResult struct {
	// Specifies the resource ID.
	Id string `pulumi:"id"`
	// The identity of the resource.
	Identity *IdentityResponse `pulumi:"identity"`
	// Specifies the location of the resource.
	Location *string `pulumi:"location"`
	// Specifies the name of the resource.
	Name string `pulumi:"name"`
	// Compute properties
	Properties interface{} `pulumi:"properties"`
	// The sku of the workspace.
	Sku *SkuResponse `pulumi:"sku"`
	// Contains resource tags defined as key/value pairs.
	Tags map[string]string `pulumi:"tags"`
	// Specifies the type of the resource.
	Type string `pulumi:"type"`
}
