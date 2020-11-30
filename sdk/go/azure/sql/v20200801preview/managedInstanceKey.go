// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200801preview

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// A managed instance key.
type ManagedInstanceKey struct {
	pulumi.CustomResourceState

	// The key creation date.
	CreationDate pulumi.StringOutput `pulumi:"creationDate"`
	// Kind of encryption protector. This is metadata used for the Azure portal experience.
	Kind pulumi.StringOutput `pulumi:"kind"`
	// Resource name.
	Name pulumi.StringOutput `pulumi:"name"`
	// The key type like 'ServiceManaged', 'AzureKeyVault'.
	ServerKeyType pulumi.StringOutput `pulumi:"serverKeyType"`
	// Thumbprint of the key.
	Thumbprint pulumi.StringOutput `pulumi:"thumbprint"`
	// Resource type.
	Type pulumi.StringOutput `pulumi:"type"`
	// The URI of the key. If the ServerKeyType is AzureKeyVault, then the URI is required.
	Uri pulumi.StringPtrOutput `pulumi:"uri"`
}

// NewManagedInstanceKey registers a new resource with the given unique name, arguments, and options.
func NewManagedInstanceKey(ctx *pulumi.Context,
	name string, args *ManagedInstanceKeyArgs, opts ...pulumi.ResourceOption) (*ManagedInstanceKey, error) {
	if args == nil || args.KeyName == nil {
		return nil, errors.New("missing required argument 'KeyName'")
	}
	if args == nil || args.ManagedInstanceName == nil {
		return nil, errors.New("missing required argument 'ManagedInstanceName'")
	}
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	if args == nil || args.ServerKeyType == nil {
		return nil, errors.New("missing required argument 'ServerKeyType'")
	}
	if args == nil {
		args = &ManagedInstanceKeyArgs{}
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:sql/v20171001preview:ManagedInstanceKey"),
		},
	})
	opts = append(opts, aliases)
	var resource ManagedInstanceKey
	err := ctx.RegisterResource("azure-nextgen:sql/v20200801preview:ManagedInstanceKey", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetManagedInstanceKey gets an existing ManagedInstanceKey resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetManagedInstanceKey(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *ManagedInstanceKeyState, opts ...pulumi.ResourceOption) (*ManagedInstanceKey, error) {
	var resource ManagedInstanceKey
	err := ctx.ReadResource("azure-nextgen:sql/v20200801preview:ManagedInstanceKey", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering ManagedInstanceKey resources.
type managedInstanceKeyState struct {
	// The key creation date.
	CreationDate *string `pulumi:"creationDate"`
	// Kind of encryption protector. This is metadata used for the Azure portal experience.
	Kind *string `pulumi:"kind"`
	// Resource name.
	Name *string `pulumi:"name"`
	// The key type like 'ServiceManaged', 'AzureKeyVault'.
	ServerKeyType *string `pulumi:"serverKeyType"`
	// Thumbprint of the key.
	Thumbprint *string `pulumi:"thumbprint"`
	// Resource type.
	Type *string `pulumi:"type"`
	// The URI of the key. If the ServerKeyType is AzureKeyVault, then the URI is required.
	Uri *string `pulumi:"uri"`
}

type ManagedInstanceKeyState struct {
	// The key creation date.
	CreationDate pulumi.StringPtrInput
	// Kind of encryption protector. This is metadata used for the Azure portal experience.
	Kind pulumi.StringPtrInput
	// Resource name.
	Name pulumi.StringPtrInput
	// The key type like 'ServiceManaged', 'AzureKeyVault'.
	ServerKeyType pulumi.StringPtrInput
	// Thumbprint of the key.
	Thumbprint pulumi.StringPtrInput
	// Resource type.
	Type pulumi.StringPtrInput
	// The URI of the key. If the ServerKeyType is AzureKeyVault, then the URI is required.
	Uri pulumi.StringPtrInput
}

func (ManagedInstanceKeyState) ElementType() reflect.Type {
	return reflect.TypeOf((*managedInstanceKeyState)(nil)).Elem()
}

type managedInstanceKeyArgs struct {
	// The name of the managed instance key to be operated on (updated or created).
	KeyName string `pulumi:"keyName"`
	// The name of the managed instance.
	ManagedInstanceName string `pulumi:"managedInstanceName"`
	// The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The key type like 'ServiceManaged', 'AzureKeyVault'.
	ServerKeyType string `pulumi:"serverKeyType"`
	// The URI of the key. If the ServerKeyType is AzureKeyVault, then the URI is required.
	Uri *string `pulumi:"uri"`
}

// The set of arguments for constructing a ManagedInstanceKey resource.
type ManagedInstanceKeyArgs struct {
	// The name of the managed instance key to be operated on (updated or created).
	KeyName pulumi.StringInput
	// The name of the managed instance.
	ManagedInstanceName pulumi.StringInput
	// The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
	ResourceGroupName pulumi.StringInput
	// The key type like 'ServiceManaged', 'AzureKeyVault'.
	ServerKeyType pulumi.StringInput
	// The URI of the key. If the ServerKeyType is AzureKeyVault, then the URI is required.
	Uri pulumi.StringPtrInput
}

func (ManagedInstanceKeyArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*managedInstanceKeyArgs)(nil)).Elem()
}

type ManagedInstanceKeyInput interface {
	pulumi.Input

	ToManagedInstanceKeyOutput() ManagedInstanceKeyOutput
	ToManagedInstanceKeyOutputWithContext(ctx context.Context) ManagedInstanceKeyOutput
}

func (ManagedInstanceKey) ElementType() reflect.Type {
	return reflect.TypeOf((*ManagedInstanceKey)(nil)).Elem()
}

func (i ManagedInstanceKey) ToManagedInstanceKeyOutput() ManagedInstanceKeyOutput {
	return i.ToManagedInstanceKeyOutputWithContext(context.Background())
}

func (i ManagedInstanceKey) ToManagedInstanceKeyOutputWithContext(ctx context.Context) ManagedInstanceKeyOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ManagedInstanceKeyOutput)
}

type ManagedInstanceKeyOutput struct {
	*pulumi.OutputState
}

func (ManagedInstanceKeyOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*ManagedInstanceKeyOutput)(nil)).Elem()
}

func (o ManagedInstanceKeyOutput) ToManagedInstanceKeyOutput() ManagedInstanceKeyOutput {
	return o
}

func (o ManagedInstanceKeyOutput) ToManagedInstanceKeyOutputWithContext(ctx context.Context) ManagedInstanceKeyOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(ManagedInstanceKeyOutput{})
}
