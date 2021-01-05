// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package latest

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// A database geo backup policy.
// Latest API Version: 2014-04-01.
type GeoBackupPolicy struct {
	pulumi.CustomResourceState

	// Kind of geo backup policy.  This is metadata used for the Azure portal experience.
	Kind pulumi.StringOutput `pulumi:"kind"`
	// Backup policy location.
	Location pulumi.StringOutput `pulumi:"location"`
	// Resource name.
	Name pulumi.StringOutput `pulumi:"name"`
	// The state of the geo backup policy.
	State pulumi.StringOutput `pulumi:"state"`
	// The storage type of the geo backup policy.
	StorageType pulumi.StringOutput `pulumi:"storageType"`
	// Resource type.
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewGeoBackupPolicy registers a new resource with the given unique name, arguments, and options.
func NewGeoBackupPolicy(ctx *pulumi.Context,
	name string, args *GeoBackupPolicyArgs, opts ...pulumi.ResourceOption) (*GeoBackupPolicy, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.DatabaseName == nil {
		return nil, errors.New("invalid value for required argument 'DatabaseName'")
	}
	if args.GeoBackupPolicyName == nil {
		return nil, errors.New("invalid value for required argument 'GeoBackupPolicyName'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	if args.ServerName == nil {
		return nil, errors.New("invalid value for required argument 'ServerName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:sql/v20140401:GeoBackupPolicy"),
		},
	})
	opts = append(opts, aliases)
	var resource GeoBackupPolicy
	err := ctx.RegisterResource("azure-nextgen:sql/latest:GeoBackupPolicy", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetGeoBackupPolicy gets an existing GeoBackupPolicy resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetGeoBackupPolicy(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *GeoBackupPolicyState, opts ...pulumi.ResourceOption) (*GeoBackupPolicy, error) {
	var resource GeoBackupPolicy
	err := ctx.ReadResource("azure-nextgen:sql/latest:GeoBackupPolicy", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering GeoBackupPolicy resources.
type geoBackupPolicyState struct {
	// Kind of geo backup policy.  This is metadata used for the Azure portal experience.
	Kind *string `pulumi:"kind"`
	// Backup policy location.
	Location *string `pulumi:"location"`
	// Resource name.
	Name *string `pulumi:"name"`
	// The state of the geo backup policy.
	State *string `pulumi:"state"`
	// The storage type of the geo backup policy.
	StorageType *string `pulumi:"storageType"`
	// Resource type.
	Type *string `pulumi:"type"`
}

type GeoBackupPolicyState struct {
	// Kind of geo backup policy.  This is metadata used for the Azure portal experience.
	Kind pulumi.StringPtrInput
	// Backup policy location.
	Location pulumi.StringPtrInput
	// Resource name.
	Name pulumi.StringPtrInput
	// The state of the geo backup policy.
	State pulumi.StringPtrInput
	// The storage type of the geo backup policy.
	StorageType pulumi.StringPtrInput
	// Resource type.
	Type pulumi.StringPtrInput
}

func (GeoBackupPolicyState) ElementType() reflect.Type {
	return reflect.TypeOf((*geoBackupPolicyState)(nil)).Elem()
}

type geoBackupPolicyArgs struct {
	// The name of the database.
	DatabaseName string `pulumi:"databaseName"`
	// The name of the geo backup policy.
	GeoBackupPolicyName string `pulumi:"geoBackupPolicyName"`
	// The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the server.
	ServerName string `pulumi:"serverName"`
	// The state of the geo backup policy.
	State string `pulumi:"state"`
}

// The set of arguments for constructing a GeoBackupPolicy resource.
type GeoBackupPolicyArgs struct {
	// The name of the database.
	DatabaseName pulumi.StringInput
	// The name of the geo backup policy.
	GeoBackupPolicyName pulumi.StringInput
	// The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
	ResourceGroupName pulumi.StringInput
	// The name of the server.
	ServerName pulumi.StringInput
	// The state of the geo backup policy.
	State GeoBackupPolicyState
}

func (GeoBackupPolicyArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*geoBackupPolicyArgs)(nil)).Elem()
}

type GeoBackupPolicyInput interface {
	pulumi.Input

	ToGeoBackupPolicyOutput() GeoBackupPolicyOutput
	ToGeoBackupPolicyOutputWithContext(ctx context.Context) GeoBackupPolicyOutput
}

func (*GeoBackupPolicy) ElementType() reflect.Type {
	return reflect.TypeOf((*GeoBackupPolicy)(nil))
}

func (i *GeoBackupPolicy) ToGeoBackupPolicyOutput() GeoBackupPolicyOutput {
	return i.ToGeoBackupPolicyOutputWithContext(context.Background())
}

func (i *GeoBackupPolicy) ToGeoBackupPolicyOutputWithContext(ctx context.Context) GeoBackupPolicyOutput {
	return pulumi.ToOutputWithContext(ctx, i).(GeoBackupPolicyOutput)
}

type GeoBackupPolicyOutput struct {
	*pulumi.OutputState
}

func (GeoBackupPolicyOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*GeoBackupPolicy)(nil))
}

func (o GeoBackupPolicyOutput) ToGeoBackupPolicyOutput() GeoBackupPolicyOutput {
	return o
}

func (o GeoBackupPolicyOutput) ToGeoBackupPolicyOutputWithContext(ctx context.Context) GeoBackupPolicyOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(GeoBackupPolicyOutput{})
}