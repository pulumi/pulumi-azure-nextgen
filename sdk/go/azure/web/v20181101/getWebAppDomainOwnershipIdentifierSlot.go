// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20181101

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupWebAppDomainOwnershipIdentifierSlot(ctx *pulumi.Context, args *LookupWebAppDomainOwnershipIdentifierSlotArgs, opts ...pulumi.InvokeOption) (*LookupWebAppDomainOwnershipIdentifierSlotResult, error) {
	var rv LookupWebAppDomainOwnershipIdentifierSlotResult
	err := ctx.Invoke("azure-nextgen:web/v20181101:getWebAppDomainOwnershipIdentifierSlot", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupWebAppDomainOwnershipIdentifierSlotArgs struct {
	// Name of domain ownership identifier.
	DomainOwnershipIdentifierName string `pulumi:"domainOwnershipIdentifierName"`
	// Name of the app.
	Name string `pulumi:"name"`
	// Name of the resource group to which the resource belongs.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// Name of the deployment slot. If a slot is not specified, the API will delete the binding for the production slot.
	Slot string `pulumi:"slot"`
}

// A domain specific resource identifier.
type LookupWebAppDomainOwnershipIdentifierSlotResult struct {
	// Resource Id.
	Id string `pulumi:"id"`
	// Kind of resource.
	Kind *string `pulumi:"kind"`
	// Resource Name.
	Name string `pulumi:"name"`
	// Resource type.
	Type string `pulumi:"type"`
}
