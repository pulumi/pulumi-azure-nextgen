// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200801preview

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// An Azure SQL instance pool.
type InstancePool struct {
	pulumi.CustomResourceState

	// The license type. Possible values are 'LicenseIncluded' (price for SQL license is included) and 'BasePrice' (without SQL license price).
	LicenseType pulumi.StringOutput `pulumi:"licenseType"`
	// Resource location.
	Location pulumi.StringOutput `pulumi:"location"`
	// Resource name.
	Name pulumi.StringOutput `pulumi:"name"`
	// The name and tier of the SKU.
	Sku SkuResponsePtrOutput `pulumi:"sku"`
	// Resource ID of the subnet to place this instance pool in.
	SubnetId pulumi.StringOutput `pulumi:"subnetId"`
	// Resource tags.
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// Resource type.
	Type pulumi.StringOutput `pulumi:"type"`
	// Count of vCores belonging to this instance pool.
	VCores pulumi.IntOutput `pulumi:"vCores"`
}

// NewInstancePool registers a new resource with the given unique name, arguments, and options.
func NewInstancePool(ctx *pulumi.Context,
	name string, args *InstancePoolArgs, opts ...pulumi.ResourceOption) (*InstancePool, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.InstancePoolName == nil {
		return nil, errors.New("invalid value for required argument 'InstancePoolName'")
	}
	if args.LicenseType == nil {
		return nil, errors.New("invalid value for required argument 'LicenseType'")
	}
	if args.Location == nil {
		return nil, errors.New("invalid value for required argument 'Location'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	if args.SubnetId == nil {
		return nil, errors.New("invalid value for required argument 'SubnetId'")
	}
	if args.VCores == nil {
		return nil, errors.New("invalid value for required argument 'VCores'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:sql/v20180601preview:InstancePool"),
		},
	})
	opts = append(opts, aliases)
	var resource InstancePool
	err := ctx.RegisterResource("azure-nextgen:sql/v20200801preview:InstancePool", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetInstancePool gets an existing InstancePool resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetInstancePool(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *InstancePoolState, opts ...pulumi.ResourceOption) (*InstancePool, error) {
	var resource InstancePool
	err := ctx.ReadResource("azure-nextgen:sql/v20200801preview:InstancePool", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering InstancePool resources.
type instancePoolState struct {
	// The license type. Possible values are 'LicenseIncluded' (price for SQL license is included) and 'BasePrice' (without SQL license price).
	LicenseType *string `pulumi:"licenseType"`
	// Resource location.
	Location *string `pulumi:"location"`
	// Resource name.
	Name *string `pulumi:"name"`
	// The name and tier of the SKU.
	Sku *SkuResponse `pulumi:"sku"`
	// Resource ID of the subnet to place this instance pool in.
	SubnetId *string `pulumi:"subnetId"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// Resource type.
	Type *string `pulumi:"type"`
	// Count of vCores belonging to this instance pool.
	VCores *int `pulumi:"vCores"`
}

type InstancePoolState struct {
	// The license type. Possible values are 'LicenseIncluded' (price for SQL license is included) and 'BasePrice' (without SQL license price).
	LicenseType pulumi.StringPtrInput
	// Resource location.
	Location pulumi.StringPtrInput
	// Resource name.
	Name pulumi.StringPtrInput
	// The name and tier of the SKU.
	Sku SkuResponsePtrInput
	// Resource ID of the subnet to place this instance pool in.
	SubnetId pulumi.StringPtrInput
	// Resource tags.
	Tags pulumi.StringMapInput
	// Resource type.
	Type pulumi.StringPtrInput
	// Count of vCores belonging to this instance pool.
	VCores pulumi.IntPtrInput
}

func (InstancePoolState) ElementType() reflect.Type {
	return reflect.TypeOf((*instancePoolState)(nil)).Elem()
}

type instancePoolArgs struct {
	// The name of the instance pool to be created or updated.
	InstancePoolName string `pulumi:"instancePoolName"`
	// The license type. Possible values are 'LicenseIncluded' (price for SQL license is included) and 'BasePrice' (without SQL license price).
	LicenseType string `pulumi:"licenseType"`
	// Resource location.
	Location string `pulumi:"location"`
	// The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name and tier of the SKU.
	Sku *Sku `pulumi:"sku"`
	// Resource ID of the subnet to place this instance pool in.
	SubnetId string `pulumi:"subnetId"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// Count of vCores belonging to this instance pool.
	VCores int `pulumi:"vCores"`
}

// The set of arguments for constructing a InstancePool resource.
type InstancePoolArgs struct {
	// The name of the instance pool to be created or updated.
	InstancePoolName pulumi.StringInput
	// The license type. Possible values are 'LicenseIncluded' (price for SQL license is included) and 'BasePrice' (without SQL license price).
	LicenseType pulumi.StringInput
	// Resource location.
	Location pulumi.StringInput
	// The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
	ResourceGroupName pulumi.StringInput
	// The name and tier of the SKU.
	Sku SkuPtrInput
	// Resource ID of the subnet to place this instance pool in.
	SubnetId pulumi.StringInput
	// Resource tags.
	Tags pulumi.StringMapInput
	// Count of vCores belonging to this instance pool.
	VCores pulumi.IntInput
}

func (InstancePoolArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*instancePoolArgs)(nil)).Elem()
}

type InstancePoolInput interface {
	pulumi.Input

	ToInstancePoolOutput() InstancePoolOutput
	ToInstancePoolOutputWithContext(ctx context.Context) InstancePoolOutput
}

func (InstancePool) ElementType() reflect.Type {
	return reflect.TypeOf((*InstancePool)(nil)).Elem()
}

func (i InstancePool) ToInstancePoolOutput() InstancePoolOutput {
	return i.ToInstancePoolOutputWithContext(context.Background())
}

func (i InstancePool) ToInstancePoolOutputWithContext(ctx context.Context) InstancePoolOutput {
	return pulumi.ToOutputWithContext(ctx, i).(InstancePoolOutput)
}

type InstancePoolOutput struct {
	*pulumi.OutputState
}

func (InstancePoolOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*InstancePoolOutput)(nil)).Elem()
}

func (o InstancePoolOutput) ToInstancePoolOutput() InstancePoolOutput {
	return o
}

func (o InstancePoolOutput) ToInstancePoolOutputWithContext(ctx context.Context) InstancePoolOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(InstancePoolOutput{})
}
