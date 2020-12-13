// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20191101preview

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupDataCollectionRuleAssociation(ctx *pulumi.Context, args *LookupDataCollectionRuleAssociationArgs, opts ...pulumi.InvokeOption) (*LookupDataCollectionRuleAssociationResult, error) {
	var rv LookupDataCollectionRuleAssociationResult
	err := ctx.Invoke("azure-nextgen:insights/v20191101preview:getDataCollectionRuleAssociation", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupDataCollectionRuleAssociationArgs struct {
	// The name of the association.
	AssociationName string `pulumi:"associationName"`
	// The identifier of the resource.
	ResourceUri string `pulumi:"resourceUri"`
}

// Definition of generic ARM proxy resource.
type LookupDataCollectionRuleAssociationResult struct {
	// The resource ID of the data collection rule that is to be associated.
	DataCollectionRuleId string `pulumi:"dataCollectionRuleId"`
	// Description of the association.
	Description *string `pulumi:"description"`
	// Resource entity tag (ETag).
	Etag string `pulumi:"etag"`
	// Fully qualified ID of the resource.
	Id string `pulumi:"id"`
	// The name of the resource.
	Name string `pulumi:"name"`
	// The resource provisioning state.
	ProvisioningState string `pulumi:"provisioningState"`
	// The type of the resource.
	Type string `pulumi:"type"`
}
