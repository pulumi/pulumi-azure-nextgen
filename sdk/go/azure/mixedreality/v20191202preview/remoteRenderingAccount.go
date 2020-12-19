// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20191202preview

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// RemoteRenderingAccount Response.
type RemoteRenderingAccount struct {
	pulumi.CustomResourceState

	// Correspond domain name of certain Spatial Anchors Account
	AccountDomain pulumi.StringOutput `pulumi:"accountDomain"`
	// unique id of certain account.
	AccountId pulumi.StringOutput `pulumi:"accountId"`
	// The geo-location where the resource lives
	Location pulumi.StringOutput `pulumi:"location"`
	// The name of the resource
	Name pulumi.StringOutput `pulumi:"name"`
	// Resource tags.
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewRemoteRenderingAccount registers a new resource with the given unique name, arguments, and options.
func NewRemoteRenderingAccount(ctx *pulumi.Context,
	name string, args *RemoteRenderingAccountArgs, opts ...pulumi.ResourceOption) (*RemoteRenderingAccount, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.AccountName == nil {
		return nil, errors.New("invalid value for required argument 'AccountName'")
	}
	if args.Location == nil {
		return nil, errors.New("invalid value for required argument 'Location'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:mixedreality/v20200406preview:RemoteRenderingAccount"),
		},
	})
	opts = append(opts, aliases)
	var resource RemoteRenderingAccount
	err := ctx.RegisterResource("azure-nextgen:mixedreality/v20191202preview:RemoteRenderingAccount", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetRemoteRenderingAccount gets an existing RemoteRenderingAccount resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetRemoteRenderingAccount(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *RemoteRenderingAccountState, opts ...pulumi.ResourceOption) (*RemoteRenderingAccount, error) {
	var resource RemoteRenderingAccount
	err := ctx.ReadResource("azure-nextgen:mixedreality/v20191202preview:RemoteRenderingAccount", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering RemoteRenderingAccount resources.
type remoteRenderingAccountState struct {
	// Correspond domain name of certain Spatial Anchors Account
	AccountDomain *string `pulumi:"accountDomain"`
	// unique id of certain account.
	AccountId *string `pulumi:"accountId"`
	// The geo-location where the resource lives
	Location *string `pulumi:"location"`
	// The name of the resource
	Name *string `pulumi:"name"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
	Type *string `pulumi:"type"`
}

type RemoteRenderingAccountState struct {
	// Correspond domain name of certain Spatial Anchors Account
	AccountDomain pulumi.StringPtrInput
	// unique id of certain account.
	AccountId pulumi.StringPtrInput
	// The geo-location where the resource lives
	Location pulumi.StringPtrInput
	// The name of the resource
	Name pulumi.StringPtrInput
	// Resource tags.
	Tags pulumi.StringMapInput
	// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
	Type pulumi.StringPtrInput
}

func (RemoteRenderingAccountState) ElementType() reflect.Type {
	return reflect.TypeOf((*remoteRenderingAccountState)(nil)).Elem()
}

type remoteRenderingAccountArgs struct {
	// Name of an Mixed Reality Account.
	AccountName string `pulumi:"accountName"`
	// The geo-location where the resource lives
	Location string `pulumi:"location"`
	// Name of an Azure resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
}

// The set of arguments for constructing a RemoteRenderingAccount resource.
type RemoteRenderingAccountArgs struct {
	// Name of an Mixed Reality Account.
	AccountName pulumi.StringInput
	// The geo-location where the resource lives
	Location pulumi.StringInput
	// Name of an Azure resource group.
	ResourceGroupName pulumi.StringInput
	// Resource tags.
	Tags pulumi.StringMapInput
}

func (RemoteRenderingAccountArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*remoteRenderingAccountArgs)(nil)).Elem()
}

type RemoteRenderingAccountInput interface {
	pulumi.Input

	ToRemoteRenderingAccountOutput() RemoteRenderingAccountOutput
	ToRemoteRenderingAccountOutputWithContext(ctx context.Context) RemoteRenderingAccountOutput
}

func (*RemoteRenderingAccount) ElementType() reflect.Type {
	return reflect.TypeOf((*RemoteRenderingAccount)(nil))
}

func (i *RemoteRenderingAccount) ToRemoteRenderingAccountOutput() RemoteRenderingAccountOutput {
	return i.ToRemoteRenderingAccountOutputWithContext(context.Background())
}

func (i *RemoteRenderingAccount) ToRemoteRenderingAccountOutputWithContext(ctx context.Context) RemoteRenderingAccountOutput {
	return pulumi.ToOutputWithContext(ctx, i).(RemoteRenderingAccountOutput)
}

type RemoteRenderingAccountOutput struct {
	*pulumi.OutputState
}

func (RemoteRenderingAccountOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*RemoteRenderingAccount)(nil))
}

func (o RemoteRenderingAccountOutput) ToRemoteRenderingAccountOutput() RemoteRenderingAccountOutput {
	return o
}

func (o RemoteRenderingAccountOutput) ToRemoteRenderingAccountOutputWithContext(ctx context.Context) RemoteRenderingAccountOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(RemoteRenderingAccountOutput{})
}
