// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20150521preview

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupArtifactSourceResource(ctx *pulumi.Context, args *LookupArtifactSourceResourceArgs, opts ...pulumi.InvokeOption) (*LookupArtifactSourceResourceResult, error) {
	var rv LookupArtifactSourceResourceResult
	err := ctx.Invoke("azure-nextgen:devtestlab/v20150521preview:getArtifactSourceResource", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupArtifactSourceResourceArgs struct {
	// The name of the lab.
	LabName string `pulumi:"labName"`
	// The name of the artifact source.
	Name string `pulumi:"name"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// Properties of an artifact source.
type LookupArtifactSourceResourceResult struct {
	// The branch reference of the artifact source.
	BranchRef *string `pulumi:"branchRef"`
	// The display name of the artifact source.
	DisplayName *string `pulumi:"displayName"`
	// The folder path of the artifact source.
	FolderPath *string `pulumi:"folderPath"`
	// The identifier of the resource.
	Id *string `pulumi:"id"`
	// The location of the resource.
	Location *string `pulumi:"location"`
	// The name of the resource.
	Name *string `pulumi:"name"`
	// The provisioning status of the resource.
	ProvisioningState *string `pulumi:"provisioningState"`
	// The security token of the artifact source.
	SecurityToken *string `pulumi:"securityToken"`
	// The type of the artifact source.
	SourceType *string `pulumi:"sourceType"`
	// The status of the artifact source.
	Status *string `pulumi:"status"`
	// The tags of the resource.
	Tags map[string]string `pulumi:"tags"`
	// The type of the resource.
	Type *string `pulumi:"type"`
	// The URI of the artifact source.
	Uri *string `pulumi:"uri"`
}
